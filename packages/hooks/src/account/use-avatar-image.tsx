import React, { useEffect, useState } from 'react';

export enum AvatarConfig {
    DEFAULT_AVATAR_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Graukarte.svg'
}

const useAvatarImage = () => {
    const [avatarImage, setAvatarImage] = useState<string>(
        AvatarConfig.DEFAULT_AVATAR_IMAGE
    );
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {}, []);

    const fetchNewImage = async () => {
        try {
            // eslint-disable-next-line no-undef
            const response = await fetch('http://localhost:3000/');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');

            return [];
        }
    };

    const getNewAvatarImage = async () => {
        try {
            const response = await fetchNewImage();
            const randomIndex = Math.floor(Math.random() * response.length);
            setAvatarImage(response[randomIndex].thumbnail);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        }
    };

    const getAvatarImage = () => avatarImage;

    const saveAvatarImage = () => {
        // Placeholder for Redux action to save the avatar image to user profile and update
        console.log('Long press on avatar image');
    };

    return { avatarImage, error, getAvatarImage, getNewAvatarImage, saveAvatarImage };
};
export default useAvatarImage;
