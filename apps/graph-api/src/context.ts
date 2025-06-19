import { AvatarImageAPI } from './datasources/avatar-image-api';

export type DataSourceContext = {
    dataSources: {
        avatarImageAPI: AvatarImageAPI;
    };
};
