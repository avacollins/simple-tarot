import { Meta, StoryObj } from '@storybook/react';
import LoginForm from './login-form';
import React from 'react';
import mdx from './login-form.mdx';

const meta = {
    title: 'Organisms/LoginForm',
    component: LoginForm,
    parameters: {
        docs: {
            page: mdx
        }
    }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        email: '',
        password: '',
        errors: [],
        onEmailChange: (text: string) => {
            console.log('Email changed:', text);
        },
        onPasswordChange: (text: string) => {
            console.log('Password changed:', text);
        },
        onSubmit: () => {
            console.log('Submitted');
        }
    }
};

export const WithError: Story = {
    args: {
        email: '',
        password: '',
        errors: [
            { type: 'emailAddress', message: 'Invalid email address' },
            { type: 'password', message: 'Password is too short' }
        ],
        onEmailChange: (text: string) => {
            console.log('Email changed:', text);
        },
        onPasswordChange: (text: string) => {
            console.log('Password changed:', text);
        },
        onSubmit: () => {
            console.log('Submitted');
        }
    }
};
