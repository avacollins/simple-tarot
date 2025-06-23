import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { expect } from 'storybook/test';
import { errorMessages } from '@simpletarot/hooks';

import React from 'react';
import LoginScreen from '../screens/login-screen';
const meta = {
    title: 'Screens/LoginScreen',
    component: LoginScreen,
    parameters: {
        layout: 'padded',
        viewport: { value: 'iphone14pro', isRotated: false }
    }
} satisfies Meta<typeof LoginScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvalidEmailTest = {
    args: {
        onSubmit: (emailAddress: string, password: string) => {
            console.log('Submitted:', { emailAddress, password });
        }
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.type(canvas.getByPlaceholderText('Enter your email'), 'test');

        await userEvent.type(
            canvas.getByPlaceholderText('Enter your password'),
            'pasword'
        );

        const LoginBtn = canvas.getByRole('button');
        await userEvent.click(LoginBtn);

        await expect(LoginBtn).toBeDisabled();
        await expect(canvas.getByText(errorMessages.INVALID_EMAIL.message)).toBeVisible();
    }
};
