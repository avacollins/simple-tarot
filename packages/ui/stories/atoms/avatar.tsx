import { Avatar } from '@rneui/themed';
import React from 'react';

type AvatarButtonProps = {
    size: number | 'small' | 'medium' | 'large' | 'xlarge' | undefined;
};

const AvatarButton: React.FC<AvatarButtonProps> = ({ size = 'xlarge' }) => (
    <Avatar
        size={size}
        rounded
        source={{ uri: 'https://avatars.githubusercontent.com/u/1259113?v=4' }}
    />
);

export default AvatarButton;
