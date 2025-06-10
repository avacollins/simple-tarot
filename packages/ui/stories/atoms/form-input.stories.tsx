import { StoryObj, Meta } from '@storybook/react-native-web-vite';
import FormInput from './form-input';
import React from 'react';
import { KeyboardTypeOptions } from 'react-native';

const meta = {
    title: 'Atoms/FormInput',
    component: FormInput
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        value: '',
        textContentType: 'emailAddress',
        hasError: false,
        keyboardType: 'email-address',
        onChangeText: text => console.log(text)
    }
};
export const Error: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        value: '',
        textContentType: 'emailAddress',
        hasError: true,
        keyboardType: 'email-address',
        onChangeText: text => console.log(text)
    }
};

export const Password: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter your password',
        value: '',
        textContentType: 'password',
        hasError: false,
        keyboardType: 'default',
        onChangeText: text => console.log(text)
    }
};
