import { Meta, StoryObj } from '@storybook/react';
import mdx from './form-input-row.mdx';
import FormInputRow from './form-input-row';
import React from 'react';

const meta = {
    title: 'Molecules/FormInputRow',
    component: FormInputRow,
    parameters: {
        docs: {
            page: mdx
        }
    }
} satisfies Meta<typeof FormInputRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        inputProps: {
            label: 'Email',
            placeholder: 'Enter your email',
            value: '',
            textContentType: 'emailAddress',
            hasError: false,
            keyboardType: 'email-address',
            onChangeText: (text: string) => console.log(text),
            disabled: false
        },
        textProps: {
            error: false
        }
    }
};

export const WithError: Story = {
    args: {
        inputProps: {
            label: 'Email',
            placeholder: 'Enter your email',
            value: '',
            textContentType: 'emailAddress',
            hasError: true,
            keyboardType: 'email-address',
            onChangeText: (text: string) => console.log(text),
            disabled: false
        },
        textProps: {
            error: { message: 'Invalid email address', type: 'emailAddress' }
        }
    }
};
