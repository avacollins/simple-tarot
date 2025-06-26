import { Meta, StoryObj } from '@storybook/react-native-web-vite';

import NewReadingScreen from './new-reading-screen';

const meta = {
    title: 'Screens/NewReadingScreen',
    component: NewReadingScreen,
    parameters: {
        docs: {
            disable: true
        }
    },
    tags: ['!autodocs']
} satisfies Meta<typeof NewReadingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onStart: () => {
            console.log('New reading started');
        }
    }
};
