import { initialize, mswLoader } from 'msw-storybook-addon';

import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import type { Preview } from '@storybook/react-native-web-vite';

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize({
    onUnhandledRequest: 'bypass'
});

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
