export const typePolicies = {
    typePolicies: {
        AvatarImages: {
            fields: {
                thumbnail: {
                    merge(existing: unknown[] = [], incoming: unknown[]) {
                        return [...existing, ...incoming];
                    }
                }
            }
        }
    }
};
