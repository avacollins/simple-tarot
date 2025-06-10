import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import mdx from './avatar-image.mdx';
import AvatarImage from './avatar-image';
import React from 'react';
import { http, HttpResponse, delay } from 'msw';

const meta = {
    title: 'Atoms/Avatar',
    component: AvatarImage,
    parameters: {
        docs: {
            page: mdx
        }
    }
} satisfies Meta<typeof AvatarImage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
    {
        thumbnail:
            'https://serpapi.com/searches/6848640a572948e38ff92ebd/images/0a5f0bc6c789c9f1f0ddd162bc4b17c5e5556142b1a5739707b4bfba37ae1bf6.jpeg'
    },
    {
        thumbnail:
            'https://serpapi.com/searches/6848640a572948e38ff92ebd/images/0a5f0bc6c789c9f1378c8240989ad89fb0b87dd3c7f42fa3104f39427f962511.jpeg'
    },
    {
        thumbnail:
            'https://serpapi.com/searches/6848640a572948e38ff92ebd/images/0a5f0bc6c789c9f12bf29fb78fbb28ff8e2b4d50998e7193819b76a12b2ba3fe.jpeg'
    },
    {
        thumbnail:
            'https://serpapi.com/searches/6848640a572948e38ff92ebd/images/0a5f0bc6c789c9f1d864b1e5c95bdddf81d27cbdb59a43ed0cd574e996728fd5.jpeg'
    },
    {
        thumbnail:
            'https://serpapi.com/searches/6848640a572948e38ff92ebd/images/0a5f0bc6c789c9f11ef372243af81b70f9a5501a9b4c0fd33bdac220227dd335.png'
    },
    {
        thumbnail:
            'https://serpapi.com/searches/6848640a572948e38ff92ebd/images/0a5f0bc6c789c9f131cb9265397aee4d209e02d3cd3bd5e3ef267cb0e16e2eee.jpeg'
    },
    {
        thumbnail:
            'https://serpapi.com/searches/6848640a572948e38ff92ebd/images/0a5f0bc6c789c9f19ddd506bd1bd9f5780057a8f41acd559a51612badda1be77.jpeg'
    }
];

export const Primary: Story = {
    args: {
        size: 200
    },
    parameters: {
        msw: {
            handlers: [
                http.get('https://localhost:3443', () => HttpResponse.json(mockData))
            ]
        }
    }
};

export const Saved: Story = {
    args: {
        size: 200,
        saved: 'https://serpapi.com/searches/6843526b69819df7ebec89f8/images/0a5f0bc6c789c9f1378c8240989ad89fa4198ddb662d316731ef3f377ba16ae0.jpeg'
    },
    parameters: {
        msw: {
            handlers: [
                http.get('https://localhost:3443', () => HttpResponse.json(mockData))
            ]
        }
    }
};
