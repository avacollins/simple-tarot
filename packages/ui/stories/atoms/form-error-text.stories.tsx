import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import FormErrorText from './form-error-text';
import React from 'react';

const meta = {
    title: 'Atoms/FormErrorText',
    component: FormErrorText
} satisfies Meta<typeof FormErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        error: {
            message: 'This is an error message',
            type: 'none'
        }
    }
};
export const NoError: Story = {
    args: {
        error: false
    }
};
