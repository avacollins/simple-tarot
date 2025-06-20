import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

export enum AvatarConfig {
    DEFAULT_AVATAR_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Graukarte.svg'
}

const GET_AVATAR_IMAGES = gql`
    query AvatarImages {
        avatarImages {
            thumbnail
        }
    }
`;

const useAvatarImage = () => {
    const [avatarImage, setAvatarImage] = useState<string>(
        AvatarConfig.DEFAULT_AVATAR_IMAGE
    );
    const [images, setImages] = useState<string[]>([]);

    const { loading, error, data } = useQuery(GET_AVATAR_IMAGES);

    useEffect(() => {
        if (loading) {
            console.log('Loading avatar image...');
        }
        if (data && data.avatarImages && data.avatarImages.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.avatarImages.length);
            setAvatarImage(data.avatarImages[randomIndex].thumbnail);
            setImages(
                data.avatarImages.map((image: { thumbnail: string }) => image.thumbnail)
            );
        }
        if (error) {
            console.error('Error fetching avatar images:', error);
        }
    }, [loading, error, data]);

    const getAvatarImage = () => avatarImage;

    const saveAvatarImage = () => {
        // Placeholder for Redux action to save the avatar image to user profile and update
        console.log('Long press on avatar image');
    };

    const getNewAvatarImage = () => {
        console.log(`Getting new avatar images ${images.length}`);
        const randomIndex = Math.floor(Math.random() * data.avatarImages.length);
        setAvatarImage(images[randomIndex] ?? AvatarConfig.DEFAULT_AVATAR_IMAGE);
    };

    return { avatarImage, error, getAvatarImage, getNewAvatarImage, saveAvatarImage };
};
export default useAvatarImage;
