import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/test-setup.ts'], // Add setup file
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'dist/',
                '**/*.d.ts',
                '**/*.test.{ts,tsx}',
                '**/*.spec.{ts,tsx}',
                "**/*.mjs",
                "src/__mocks__/**",
                "src/cards/coins/**",
                "src/cards/cups/**",
                "src/cards/pentacles/**",
                "src/cards/swords/**",
                "src/cards/major-arcana/**",
                "src/cards/wands/**",
            ]
        }
    },
    esbuild: {
        target: 'ES2017'
    }
});