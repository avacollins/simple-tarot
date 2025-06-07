import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import SignupScreen from './signup-screen';

const meta = {
    title: 'Screens/SignupScreen',
    component: SignupScreen,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'A screen for user registration, allowing users to sign up with an email and password.'
            }
        },
        globals: {
            viewport: { value: 'iphone14pro', isRotated: false }
        }
    }
} satisfies Meta<typeof SignupScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmit: (emailAddress: string, password: string) => {
            console.log('Submitted:', { emailAddress, password });
        }
    }
};
