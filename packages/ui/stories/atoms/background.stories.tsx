import { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, Text, View } from 'react-native';

import Background from './background';
import React from 'react';

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 12,
        borderRadius: 8
    }
});

const meta = {
    title: 'Atoms/Background',
    component: Background
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <View>
                <Text style={styles.text}>Background Story Example</Text>
            </View>
        )
    }
};
