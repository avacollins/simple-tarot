import { Meta, StoryObj } from '@storybook/react-native-web-vite';

import Card from './card';
import React from 'react';
import mdx from './card.mdx';

const meta: Meta<typeof Card> = {
    title: 'Atoms/Card',
    component: Card,
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        cardIndex: {
            control: { type: 'number' },
            description: 'Index of the card to display',
            defaultValue: 0
        },
        face: {
            control: { type: 'boolean' },
            description: 'Whether to show the card face or back',
            defaultValue: false
        },
        styleProps: {
            control: { type: 'object' },
            description: 'Style properties for the card'
        },
        onPress: {
            action: 'pressed',
            description: 'Function to call when the card is pressed'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
    args: {
        cardIndex: 0,
        face: false,
        styleProps: {
            width: 100,
            height: 200,
            opacity: 1
        }
    },
    render: args => <Card {...args} />
};

export const FaceCard: Story = {
    args: {
        cardIndex: 1,
        face: true,
        mocked: true,
        styleProps: {
            width: 100,
            height: 200,
            opacity: 1
        }
    },
    render: args => <Card {...args} />
};
