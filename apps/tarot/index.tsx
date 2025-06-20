import App from './app/index';
import { MobileView } from '@simpletarot/ui';
import React from 'react';
import { registerRootComponent } from 'expo';

const Root = () => (
    <MobileView>
        <App />
    </MobileView>
);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
