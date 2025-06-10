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

    const getNewAvatarImage = async () => {
        // eslint-disable-next-line no-undef
        fetch('http://localhost:3000/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                return response.json();
            })
            .then(data => {
                if (data && data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setAvatarImage(data[randomIndex].thumbnail);
                }
            })
            .catch(err => {
                setError(err instanceof Error ? err.message : 'Unknown error');
            });
    };

    const getAvatarImage = () => avatarImage;

    const saveAvatarImage = () => {
        // Placeholder for Redux action to save the avatar image to user profile and update
        console.log('Long press on avatar image');
    };

    return { avatarImage, error, getAvatarImage, getNewAvatarImage, saveAvatarImage };
};
export default useAvatarImage;
