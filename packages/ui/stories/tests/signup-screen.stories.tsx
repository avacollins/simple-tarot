import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { expect } from 'storybook/test';

import React from 'react';
import SignupScreen from '../screens/signup-screen';

const meta = {
    title: 'Screens/SignupScreen',
    component: SignupScreen,
    parameters: {
        layout: 'padded',
        viewport: { value: 'iphone14pro', isRotated: false }
    }
} satisfies Meta<typeof SignupScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmPasswordTest = {
    args: {
        onSubmit: (emailAddress: string, password: string) => {
            console.log('Submitted:', { emailAddress, password });
        }
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.type(
            canvas.getByPlaceholderText('Enter your email'),
            'test@test.com'
        );

        await userEvent.type(canvas.getByPlaceholderText('Enter your password'), 'pass');

        await userEvent.type(
            canvas.getByPlaceholderText('Enter your password'),
            'pasword'
        );

        const LoginBtn = canvas.getByRole('button');
        await userEvent.click(LoginBtn);

        await expect(LoginBtn).toBeDisabled();
        await expect(canvas.getByText('Passwords do not match')).toBeVisible();
    }
};
