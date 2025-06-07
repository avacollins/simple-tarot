import { AvatarConfig, useAvatarImage } from '@simpletarot/hooks';
import React, { useEffect } from 'react';

import { A } from 'storybook/internal/components';
import { Avatar } from '@rneui/themed';

type AvatarImageProps = {
    size: number | 'small' | 'medium' | 'large' | 'xlarge' | undefined;
    saved?: string;
};

const AvatarImage: React.FC<AvatarImageProps> = ({ size = 'xlarge', saved }) => {
    const { avatarImage, error, getNewAvatarImage, getAvatarImage, saveAvatarImage } =
        useAvatarImage();

    const [displayImage, setDisplayImage] = React.useState<string | undefined>();

    useEffect(() => {
        if (saved !== undefined && saved !== '') {
            setDisplayImage(saved);

            return;
        }
        if (avatarImage !== undefined && avatarImage !== '') {
            setDisplayImage(avatarImage);
        }

        const updateAvatarImage = async () => {
            await getNewAvatarImage();
            const newImage = getAvatarImage();
            setDisplayImage(newImage);
        };

        if (displayImage === AvatarConfig.DEFAULT_AVATAR_IMAGE) {
            updateAvatarImage();
        }
    }, [saved, avatarImage, displayImage]);

    return (
        <Avatar
            size={size}
            rounded
            source={{ uri: displayImage }}
            containerStyle={{ margin: 10, borderColor: 'black', borderWidth: 1 }}
            onPress={getNewAvatarImage}
            onLongPress={saveAvatarImage}
        />
    );
};

export default AvatarImage;
