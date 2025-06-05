import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import SignupScreen from './signup-screen';

const meta = {
    title: 'Screens/SignupScreen',
    component: SignupScreen
} satisfies Meta<typeof SignupScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmit: (email: string, password: string, confirmPassword: string) => {
            console.log('Submitted:', { email, password, confirmPassword });
        },
        error: false
    }
};
export const WithError: Story = {
    args: {
        onSubmit: (email: string, password: string, confirmPassword: string) => {
            console.log('Submitted:', { email, password, confirmPassword });
        },
        error: {
            message: 'Invalid email address',
            type: 'email'
        }
    }
};
