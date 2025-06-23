import { Meta, StoryObj } from '@storybook/react-native-web-vite';

import DisplayCardNames from './display-card-names';
import { cardNamesMock } from '../tests/mocks/cardNames';
import React from 'react';
import { graphql, HttpResponse } from 'msw';
import mdx from './display-card-names.mdx';

const meta = {
    title: 'Molecules/DisplayCardNames',
    component: DisplayCardNames,
    parameters: {
        docs: {
            page: mdx
        },
        msw: {
            handlers: [
                graphql.query('GetCardNames', () =>
                    HttpResponse.json(cardNamesMock, {
                        status: 200
                    })
                )
            ]
        }
    }
} satisfies Meta<typeof DisplayCardNames>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
