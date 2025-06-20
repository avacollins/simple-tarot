import { Meta, StoryObj } from '@storybook/react';

import DisplayCardNames from './display-card-names';
import MobileProviders from '../templates/mobile-providers';
import React from 'react';

const meta = {
    title: 'Molecules/DisplayCardNames',
    component: DisplayCardNames,
    decorators: [
        Story => (
            <MobileProviders env={{ GRAPH_URI: 'http://localhost:4000/graphql' }}>
                <Story />
            </MobileProviders>
        )
    ]
} satisfies Meta<typeof DisplayCardNames>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
