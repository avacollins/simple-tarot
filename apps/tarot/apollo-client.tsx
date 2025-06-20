import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: process.env.APOLLO_SERVER_URI || 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

export default client;
