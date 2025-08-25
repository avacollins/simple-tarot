import { AvatarImageAPI } from './datasources/avatar-image-api';
import { Driver } from 'neo4j-driver';

export type DataSourceContext = {
    dataSources: {
        avatarImageAPI: AvatarImageAPI;
    };
    driver: Driver;
};
