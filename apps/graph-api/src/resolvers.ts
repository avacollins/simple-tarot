import { Resolvers } from './types';

export const resolvers: Resolvers = {
    Query: {
        avatarImages: (_, __, { dataSources }) =>
            dataSources.avatarImageAPI.getAvatarImages()
    }
};
