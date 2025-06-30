import { act, renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useAvatarImage, { AvatarConfig } from './use-avatar-image';

import { MockedProvider } from '@apollo/client/testing';
import type { MockedResponse } from '@apollo/client/testing';
import React from 'react';
import { gql } from '@apollo/client';

const GET_AVATAR_IMAGES = gql`
    query AvatarImages {
        avatarImages {
            thumbnail
        }
    }
`;

type MockedAvatarImage = {
    thumbnail: string;
};

const mockAvatarImages: MockedAvatarImage[] = [
    { thumbnail: 'https://example.com/image1.jpg' },
    { thumbnail: 'https://example.com/image2.jpg' },
    { thumbnail: 'https://example.com/image3.jpg' }
];

const successMocks = [
    {
        request: {
            query: GET_AVATAR_IMAGES
        },
        result: {
            data: {
                avatarImages: mockAvatarImages
            }
        }
    }
];

const errorMocks = [
    {
        request: {
            query: GET_AVATAR_IMAGES
        },
        error: new Error('Failed to fetch avatar images')
    }
];

const emptyMocks = [
    {
        request: {
            query: GET_AVATAR_IMAGES
        },
        result: {
            data: {
                avatarImages: []
            }
        }
    }
];

// Mock console methods
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

// Mock Math.random for predictable tests
const mockMathRandom = vi.spyOn(Math, 'random');

const renderHookWithProvider = (mocks: MockedResponse[]) => {
    const wrapper = ({ children }: { children: React.ReactNode }) =>
        React.createElement(MockedProvider, { mocks, addTypename: false }, children);

    return renderHook(() => useAvatarImage(), { wrapper });
};

describe('useAvatarImage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockMathRandom.mockReturnValue(0.5); // Always return middle index
    });

    it('should initialize with default avatar image', () => {
        const { result } = renderHookWithProvider(successMocks);

        expect(result.current.avatarImage).toBe(AvatarConfig.DEFAULT_AVATAR_IMAGE);
        expect(result.current.error).toBeUndefined();
    });

    it('should return avatar image when getAvatarImage is called', () => {
        const { result } = renderHookWithProvider(successMocks);

        expect(result.current.getAvatarImage()).toBe(AvatarConfig.DEFAULT_AVATAR_IMAGE);
    });

    it('should log loading message during query', async () => {
        renderHookWithProvider(successMocks);

        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledWith('Loading avatar image...');
        });
    });

    it('should set random avatar image when data is loaded', async () => {
        mockMathRandom.mockReturnValue(0.5); // Will select index 1 (middle image)
        const { result } = renderHookWithProvider(successMocks);

        await waitFor(() => {
            expect(result.current.avatarImage?.toString()).toBe(
                mockAvatarImages[1]?.thumbnail
            );
        });
    });

    it('should handle query error', async () => {
        const { result } = renderHookWithProvider(errorMocks);

        await waitFor(() => {
            expect(result.current.error).toBeDefined();
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                'Error fetching avatar images:',
                expect.any(Error)
            );
        });
    });

    it('should handle empty avatar images array', async () => {
        const { result } = renderHookWithProvider(emptyMocks);

        await waitFor(() => {
            expect(result.current.avatarImage).toBe(AvatarConfig.DEFAULT_AVATAR_IMAGE);
        });
    });

    it('should generate new avatar image when getNewAvatarImage is called', async () => {
        const { result } = renderHookWithProvider(successMocks);

        await waitFor(() => {
            expect(result.current.avatarImage).toBe(mockAvatarImages[1]?.thumbnail);
        });

        // Change random value for new image selection
        mockMathRandom.mockReturnValue(0.2); // Will select index 0

        act(() => {
            result.current.getNewAvatarImage();
        });

        expect(result.current.avatarImage).toBe(mockAvatarImages[0]?.thumbnail);
    });

    it('should fall back to default image when getNewAvatarImage is called with no data', async () => {
        const { result } = renderHookWithProvider(emptyMocks);

        await waitFor(() => {
            expect(result.current.avatarImage).toBe(AvatarConfig.DEFAULT_AVATAR_IMAGE);
        });

        act(() => {
            result.current.getNewAvatarImage();
        });

        expect(result.current.avatarImage).toBe(AvatarConfig.DEFAULT_AVATAR_IMAGE);
    });

    it('should log message when saveAvatarImage is called', () => {
        const { result } = renderHookWithProvider(successMocks);

        act(() => {
            result.current.saveAvatarImage();
        });

        expect(consoleSpy).toHaveBeenCalledWith('Long press on avatar image');
    });

    it('should handle different random indices correctly', async () => {
        const { result } = renderHookWithProvider(successMocks);

        await waitFor(() => {
            expect(result.current.avatarImage).toBe(mockAvatarImages[1]?.thumbnail);
        });

        // Test first image selection
        mockMathRandom.mockReturnValue(0.1);
        act(() => {
            result.current.getNewAvatarImage();
        });
        expect(result.current.avatarImage).toBe(mockAvatarImages[0]?.thumbnail);

        // Test last image selection
        mockMathRandom.mockReturnValue(0.9);
        act(() => {
            result.current.getNewAvatarImage();
        });
        expect(result.current.avatarImage).toBe(mockAvatarImages[2]?.thumbnail);
    });

    it('should return all expected properties and methods', () => {
        const { result } = renderHookWithProvider(successMocks);

        expect(result.current).toHaveProperty('avatarImage');
        expect(result.current).toHaveProperty('error');
        expect(result.current).toHaveProperty('getAvatarImage');
        expect(result.current).toHaveProperty('getNewAvatarImage');
        expect(result.current).toHaveProperty('saveAvatarImage');

        expect(typeof result.current.getAvatarImage).toBe('function');
        expect(typeof result.current.getNewAvatarImage).toBe('function');
        expect(typeof result.current.saveAvatarImage).toBe('function');
    });
});
