import { initialize, mswLoader } from 'msw-storybook-addon';

import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import type { Preview } from '@storybook/react-native-web-vite';

let options = {};
if (location.hostname === 'avacollins.github.io') {
    options = {
        serviceWorker: {
            url: '/simple-tarot/mockServiceWorker.js'
        },
        onUnhandledRequest: 'bypass'
    };
}

initialize(options);
/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */

const preview: Preview = {
    parameters: {
        viewport: {
            options: INITIAL_VIEWPORTS
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    tags: ['autodocs'],
    loaders: [mswLoader]
};

export default preview;
