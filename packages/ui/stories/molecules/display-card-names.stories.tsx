import { Meta, StoryObj } from '@storybook/react';

import DisplayCardNames from './display-card-names';
import { cardNamesMock } from '../../mocks/cardNames';
import React from 'react';
import { graphql, HttpResponse } from 'msw';

const meta = {
    title: 'Molecules/DisplayCardNames',
    component: DisplayCardNames,
    parameters: {
        docs: {
            page: () => (
                <div>
                    <h1>Display Card Names</h1>
                    <p>A Test component for apollo client.</p>
                </div>
            )
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
    },
    tags: ['!autodocs']
} satisfies Meta<typeof DisplayCardNames>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
