import { Meta, StoryObj } from '@storybook/react-native-web-vite';

import HomeScreen from './home-screen';
import React from 'react';

const meta: Meta = {
    title: 'Screens/Home',
    component: HomeScreen,
    parameters: {
        layout: 'fullscreen',
        viewport: { value: 'iphone14pro', isRotated: false }
    },
    tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <HomeScreen />
};
