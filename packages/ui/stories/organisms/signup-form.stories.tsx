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

export const WithEmailError: Story = {
    args: {
        email: '',
        password: '',
        confirmPassword: '',
        error: { message: 'Invalid email address', type: 'emailAddress' },
        onEmailChange: (text: string) => console.log('Email changed:', text),
        onPasswordChange: (text: string) => console.log('Password changed:', text),
        onConfirmPasswordChange: (text: string) =>
            console.log('Confirm Password changed:', text),
        onSubmit: () => console.log('Form submitted')
    }
};

export const WithPasswordError: Story = {
    args: {
        email: 'admin@dev.com',
        password: '',
        confirmPassword: '',
        error: { message: 'Password must be at least 6 characters', type: 'password' },
        onEmailChange: (text: string) => console.log('Email changed:', text),
        onPasswordChange: (text: string) => console.log('Password changed:', text),
        onConfirmPasswordChange: (text: string) =>
            console.log('Confirm Password changed:', text),
        onSubmit: () => console.log('Form submitted')
    }
};

export const WithConfirmPasswordError: Story = {
    args: {
        email: 'admin@dev.com',
        password: 'password123',
        confirmPassword: 'password1234',
        error: { message: 'Passwords do not match', type: 'newPassword' },
        onEmailChange: (text: string) => console.log('Email changed:', text),
        onPasswordChange: (text: string) => console.log('Password changed:', text),
        onConfirmPasswordChange: (text: string) =>
            console.log('Confirm Password changed:', text),
        onSubmit: () => console.log('Form submitted')
    }
};
