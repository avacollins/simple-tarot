import http, { IncomingMessage, ServerResponse } from 'http';

import dotenv from 'dotenv';
import { getJson } from 'serpapi';

dotenv.config();

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    // Set CORS headers
    const allowed_domain = '*'; // Adjust with your domain or localhost port
    res.setHeader('Access-Control-Allow-Origin', allowed_domain);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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

    try {
        const response = await getJson(tcOpts);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response.images_results || []));
    } catch (error: unknown) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        let message = 'Unknown error';
        if (error instanceof Error) {
            message = error.message;
        }
        res.end(JSON.stringify({ error: message }));
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
