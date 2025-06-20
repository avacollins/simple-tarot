import { ApolloProvider } from '@apollo/client';
import App from './app/index';
import React from 'react';
import client from './apollo-client';
import { registerRootComponent } from 'expo';

const Root = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
