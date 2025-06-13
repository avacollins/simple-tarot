import { ApolloServer } from '@apollo/server';
import { fileURLToPath } from 'url';
import { gql } from 'graphql-tag';
import path from 'path';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';

// Add these lines:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = gql(
    readFileSync(path.resolve(__dirname, './schema.graphql'), {
        encoding: 'utf-8'
    })
);

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs });
    const { url } = await startStandaloneServer(server);
    console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();
