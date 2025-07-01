import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import QuickNav from '../organisms/quick-nav';
import React from 'react';
import {
    expect,
    fireEvent,
    screen,
    within,
    waitFor,
    waitForElementToBeRemoved
} from 'storybook/test';

const meta: Meta<typeof QuickNav> = {
    title: 'Organisms/QuickNav',
    component: QuickNav
} satisfies Meta<typeof QuickNav>;

export default meta;

type Story = StoryObj<typeof QuickNav>;

export const QuickNavOpenTest: Story = {
    play: async ({ step }) => {
        const canvas = within(screen.getByTestId('quick-nav-container'));

        await step('Click toggle button', async () => {
            const toggleButton = canvas.getByTestId('quick-nav-toggle');
            expect(toggleButton).toBeVisible();
            fireEvent.click(toggleButton);
            fireEvent.animationEnd(toggleButton);
            await waitFor(() =>
                expect(canvas.getByTestId('quick-nav-profile-action')).toBeVisible()
            );
            await waitFor(() =>
                expect(canvas.getByTestId('quick-nav-history-action')).toBeVisible()
            );
            await waitFor(() =>
                expect(canvas.getByTestId('quick-nav-new-reading-action')).toBeVisible()
            );
            await waitFor(() =>
                expect(canvas.getByTestId('quick-nav-home-action')).toBeVisible()
            );
            const profileAction = canvas.getByTestId('quick-nav-profile-action');
            fireEvent.click(profileAction);
            fireEvent.animationEnd(profileAction);
            await waitFor(() =>
                expect(canvas.getByTestId('quick-nav-profile-action')).not.toBeVisible()
            );
            await waitFor(() =>
                expect(canvas.getByTestId('quick-nav-history-action')).not.toBeVisible()
            );
            await waitFor(() =>
                expect(
                    canvas.getByTestId('quick-nav-new-reading-action')
                ).not.toBeVisible()
            );
            await waitFor(() =>
                expect(canvas.getByTestId('quick-nav-home-action')).not.toBeVisible()
            );
        });
    }
};
