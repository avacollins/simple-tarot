import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { avatarImagesMock } from '../tests/mocks/avatarImages';
import { graphql, HttpResponse } from 'msw';
import mdx from './user-account.mdx';

import React from 'react';
import UserAccount from './user-account';

const meta = {
    title: 'Organisms/UserAccount',
    component: UserAccount,
    parameters: {
        layout: 'padded',
        viewport: { value: 'iphone14pro', isRotated: false },
        docs: {
            page: mdx
        },
        msw: {
            handlers: [
                graphql.query('AvatarImages', () =>
                    HttpResponse.json(avatarImagesMock, {
                        status: 200
                    })
                )
            ]
        }
    }
} satisfies Meta<typeof UserAccount>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        useremail: 'email@domain.com',
        logout: () => {
            console.log('Logout clicked');
        },
        resetPassword: () => {
            console.log('Reset Password clicked');
        }
    }
};

export const Anonymous: Story = {
    args: {
        useremail: 'anon1198@anon.com',
        logout: () => {
            console.log('Logout clicked');
        },
        resetPassword: () => {
            console.log('Reset Password clicked');
        }
    }
};
