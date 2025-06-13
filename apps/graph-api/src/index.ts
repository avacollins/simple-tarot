import { ApolloServer } from '@apollo/server';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { gql } from 'graphql-tag';
import neo4j from 'neo4j-driver';
import path from 'path';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = gql(
    readFileSync(path.resolve(__dirname, './schema.graphql'), {
        encoding: 'utf-8'
    })
);

const NEO4J_URL = process.env.NEO4J_DB_URL || 'bolt://localhost:7687';
const NEO4J_USER = process.env.NEO4J_AUTH_USER || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_AUTH_PASSWORD || 'password';

const driver = neo4j.driver(NEO4J_URL, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD));

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

(async () => {
    try {
        const schema = await neoSchema.getSchema();
        const server = new ApolloServer({
            schema
        });
        const { url } = await startStandaloneServer(server, {
            context: async ({ req }) => ({ req }),
            listen: { port: 4000 }
        });
        console.log(`🚀 Server ready at ${url}`);
    } catch (error) {
        console.error('Error creating schema:', error);
        process.exit(1);
    }
})();
