import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
         coverage: {
            provider: 'v8', // or 'c8', 'istanbul'
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'dist/',
                '**/*.d.ts',
                '**/*.test.{ts,tsx}',
                '**/*.spec.{ts,tsx}',
                "**/*.mjs",
            ]
        }
    },
    esbuild: {
        target: 'ES2017'
    }
});