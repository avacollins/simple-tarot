import { Meta, StoryObj } from '@storybook/react';
import FormButton from './form-button';
import React from 'react';

const meta = {
    title: 'Atoms/FormButton',
    component: FormButton
} satisfies Meta<typeof FormButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        buttonLabel: 'Submit',
        btnEnabled: true,
        onPress: () => console.log('Button Pressed'),
        buttonStyle: {},
        titleStyle: {}
    }
};

export const Disabled: Story = {
    args: {
        buttonLabel: 'Submit',
        btnEnabled: false,
        onPress: () => console.log('Button Pressed'),
        buttonStyle: {},
        titleStyle: {}
    }
};

export const CustomStyles: Story = {
    args: {
        buttonLabel: 'Custom Style',
        btnEnabled: true,
        onPress: () => console.log('Button Pressed'),
        buttonStyle: { backgroundColor: 'blue', borderRadius: 10 },
        titleStyle: { color: 'white', fontSize: 18 }
    }
};
