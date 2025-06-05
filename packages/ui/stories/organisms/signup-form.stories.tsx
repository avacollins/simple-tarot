import { Meta, StoryObj } from '@storybook/react';
import SignupForm from './signup-form';
import React from 'react';

const meta = {
    title: 'Organisms/SignupForm',
    component: SignupForm
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        email: '',
        password: '',
        confirmPassword: '',
        error: false,
        onEmailChange: (text: string) => console.log('Email changed:', text),
        onPasswordChange: (text: string) => console.log('Password changed:', text),
        onConfirmPasswordChange: (text: string) =>
            console.log('Confirm Password changed:', text),
        onSubmit: () => console.log('Form submitted')
    }
};

export const WithError: Story = {
    args: {
        email: '',
        password: '',
        confirmPassword: '',
        error: { message: 'This is an error message', type: 'email' },
        onEmailChange: (text: string) => console.log('Email changed:', text),
        onPasswordChange: (text: string) => console.log('Password changed:', text),
        onConfirmPasswordChange: (text: string) =>
            console.log('Confirm Password changed:', text),
        onSubmit: () => console.log('Form submitted')
    }
};
