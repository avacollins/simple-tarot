import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { expect } from 'storybook/test';
import { errorMessages } from '@simpletarot/hooks';

import React from 'react';
import ForgotPasswordScreen from '../screens/forgot-password-screen';

const meta = {
    title: 'Screens/ForgotPasswordScreen',
    component: ForgotPasswordScreen,
    parameters: {
        layout: 'padded',
        viewport: { value: 'iphone14pro', isRotated: false }
    }
} satisfies Meta<typeof ForgotPasswordScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvalidEmailTest = {
    args: {
        onSubmit: (emailAddress: string, password: string) => {
            console.log('Submitted:', { emailAddress, password });
        }
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.type(
            canvas.getByPlaceholderText('Enter your email'),
            'test@test'
        );
        const SubmitBtn = canvas.getByRole('button');
        await userEvent.click(SubmitBtn);

        await expect(SubmitBtn).toBeDisabled();
        await expect(canvas.getByText(errorMessages.INVALID_EMAIL.message)).toBeVisible();
    }
};
