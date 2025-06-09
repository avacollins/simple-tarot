import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import type { Preview } from '@storybook/react-native-web-vite';

const preview: Preview = {
    parameters: {
        viewport: {
            options: INITIAL_VIEWPORTS
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        fetchMock: {
            debug: true,
            mocks: [
                {
                    matcher: {
                        name: 'avatarImageSuccess',
                        url: 'path:/'
                    },
                    response: {
                        status: 200,
                        body: [
                            {
                                position: 1,
                                thumbnail:
                                    'https://serpapi.com/searches/6847071095a6946f6d8008b5/images/0a5f0bc6c789c9f1f0ddd162bc4b17c5e5556142b1a5739707b4bfba37ae1bf6.jpeg',
                                license_details_url:
                                    'https://creativecommons.org/licenses/by-nc/4.0/',
                                related_content_id:
                                    'SFhEUEhUTG1BNzdpTk1cIixcIm9ZY3JYSjVCV3RSUFRN',
                                serpapi_related_content_link:
                                    'https://serpapi.com/search.json?engine=google_images_related_content&gl=us&hl=en&q=esoteric+tarot+art&related_content_id=SFhEUEhUTG1BNzdpTk1cIixcIm9ZY3JYSjVCV3RSUFRN',
                                source: 'Printerval',
                                source_logo:
                                    'https://serpapi.com/searches/6847071095a6946f6d8008b5/images/0a5f0bc6c789c9f1f0ddd162bc4b17c58f93129fcb18842479657d972be06350.png',
                                title: 'Tarot card: the pizza with eye, moon ...',
                                link: 'https://printerval.com/tarot-card-the-pizza-with-eye-moon-and-sun-occult-fortune-telling-p42210019',
                                tag: 'Licensable',
                                original:
                                    'https://cdn.printerval.com/unsafe/960x960/assets.printerval.com/2023/05/20/6467dc519775f7.48559679.jpg',
                                original_width: 960,
                                original_height: 960,
                                is_product: false
                            }
                        ]
                    }
                }
            ]
        }
    },
    tags: ['autodocs']
};

export default preview;
