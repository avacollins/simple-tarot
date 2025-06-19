import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { AvatarImageAPI } from './datasources/avatar-image-api';
import { Neo4jGraphQL } from '@neo4j/graphql';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { expressMiddleware } from '@as-integrations/express5';
import { gql } from 'graphql-tag';
import https from 'https';
import neo4j from 'neo4j-driver';
import path from 'path';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';

dotenv.config();

const sslOptions = {
    key: process.env.KEY_PEM
        ? readFileSync(process.env.KEY_PEM)
        : readFileSync('ssl/key.pem'),
    cert: process.env.CERT_PEM
        ? readFileSync(process.env.CERT_PEM)
        : readFileSync('ssl/cert.pem')
};

const typeDefs = gql(
    readFileSync(path.resolve(__dirname, './schema.graphql'), {
        encoding: 'utf-8'
    })
);

const NEO4J_URL = process.env.NEO4J_DB_URL || 'bolt://localhost:7687';
const NEO4J_USER = process.env.NEO4J_AUTH_USER || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_AUTH_PASSWORD || 'password';

const driver = neo4j.driver(NEO4J_URL, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD));

const neoSchema = new Neo4jGraphQL({ typeDefs, resolvers, driver });
const app = express();

const httpsServer = https.createServer(sslOptions, app);

const serverConfig = {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT ? Number(process.env.PORT) : 3443
};

const graphqlPath = process.env.GRAPHQL_ENDPOINT || '/graphql';

(async () => {
    try {
        const schema = await neoSchema.getSchema();
        const server = new ApolloServer({
            schema,
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpsServer })]
        });

        await server.start();

        app.use(
            graphqlPath,
            cors<cors.CorsRequest>({ origin: '*' }),
            express.json(),
            expressMiddleware(server, {
                context: async ({ req }) => {
                    const { cache } = server;

                    return {
                        dataSources: {
                            avatarImageAPI: new AvatarImageAPI({ cache })
                        },
                        req
                    };
                }
            })
        );

        await new Promise<void>(resolve => httpsServer.listen(serverConfig, resolve));

        console.log(
            `🚀 Server ready at https://${serverConfig.host}:${serverConfig.port}${graphqlPath}`
        );
    } catch (error) {
        console.error('Error creating schema:', error);
        process.exit(1);
    }
})();
