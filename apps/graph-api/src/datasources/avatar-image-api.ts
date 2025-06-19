import { AvatarImage } from '../types';
import { RESTDataSource } from '@apollo/datasource-rest';
import dotenv from 'dotenv';
import { getJson } from 'serpapi';

dotenv.config();

const tcOpts = {
    api_key: process.env.SERPAPI_API_KEY as string,
    engine: 'google_images',
    google_domain: 'google.com',
    q: 'esoteric tarot art',
    hl: 'en',
    gl: 'us',
    licenses: 'cl',
    safe: 'active',
    imgar: 's',
    nfpr: '1'
};

export class AvatarImageAPI extends RESTDataSource {
    images: AvatarImage[] = [];

    async getAvatarImages() {
        try {
            const response = await getJson(tcOpts);
            this.images = (response.images_results || []).map(
                (image: { thumbnail: string }) => ({
                    thumbnail: image.thumbnail
                })
            ) as AvatarImage[];

            return this.images;
        } catch (error) {
            let message = 'Unknown error';
            if (error instanceof Error) {
                message = error.message;
            }
            console.log(JSON.stringify({ error: message }));
        }

        return [];
    }
}
