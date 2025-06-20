import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import React from 'react';

const MobileProviders: React.FC<{ env; children: React.ReactNode }> = ({
    env,
    children
}) => {
    // Initialize Apollo Client with environment variable
    const client = new ApolloClient({
        uri: env.GRAPH_URI || 'http://localhost:4000/graphql',
        cache: new InMemoryCache()
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MobileProviders;

export interface MobileProvidersProps {
    env: Record<string, string>;
    children: React.ReactNode;
}
