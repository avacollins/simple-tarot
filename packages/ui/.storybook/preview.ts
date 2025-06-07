import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import type { Preview } from '@storybook/react-native-web-vite';

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
    tags: ['autodocs']
};

export default preview;
