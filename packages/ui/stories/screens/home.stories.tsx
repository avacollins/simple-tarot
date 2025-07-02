import { Meta, StoryObj } from '@storybook/react-native-web-vite';

import HomeScreen from './home-screen';
import React from 'react';
import { View } from 'react-native';

const meta: Meta = {
    title: 'Screens/Home',
    component: HomeScreen,
    decorators: [
        Story => (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    maxWidth: 400,
                    maxHeight: 800
                }}>
                <Story />
            </View>
        )
    ],
    tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onStart: () => console.log('New Reading Started')
    }
};
