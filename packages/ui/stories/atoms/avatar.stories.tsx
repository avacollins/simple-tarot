import { Meta, StoryObj } from '@storybook/react';

import AvatarButton from './avatar';
import React from 'react';

const meta = {
    title: 'Atoms/Avatar',
    component: AvatarButton
} satisfies Meta<typeof AvatarButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        size: 200
    }
};
