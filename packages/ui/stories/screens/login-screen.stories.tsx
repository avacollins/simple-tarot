import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import LoginScreen from './login-screen';
import mdx from './login-screen.mdx';
const meta = {
    title: 'Screens/LoginScreen',
    component: LoginScreen,
    parameters: {
        layout: 'padded',
        globals: {
            viewport: { value: 'iphone14pro', isRotated: false }
        },
        docs: {
            page: mdx
        }
    }
} satisfies Meta<typeof LoginScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmit: (emailAddress: string, password: string) => {
            console.log('Submitted:', { emailAddress, password });
        }
    }
};

export const WithErrors: Story = {
    args: {
        onSubmit: (emailAddress: string, password: string) => {
            console.log('Submitted with errors:', { emailAddress, password });
        }
    }
};
