import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';
import ForgotPasswordScreen from './forgot-password-screen';
import mdx from './forgot-password-screen.mdx';

const meta = {
    title: 'Screens/ForgotPasswordScreen',
    component: ForgotPasswordScreen,
    parameters: {
        layout: 'padded',
        viewport: { value: 'iphone14pro', isRotated: false },
        docs: {
            page: mdx
        }
    }
} satisfies Meta<typeof ForgotPasswordScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmit: (emailAddress: string) => {
            console.log('Submitted:', { emailAddress });
        }
    }
};
