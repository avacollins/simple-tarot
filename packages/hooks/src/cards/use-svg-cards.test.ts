import { describe, expect, it } from 'vitest';

import useSvgCards from './use-svg-cards';

describe('useSvgCards', () => {
    const defaultProps = { width: 100, height: 100 };

    describe('Major Arcana cards (0-21)', () => {
        it('should return Arcana0Fool for card 0', () => {
            const result = useSvgCards(0, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should return Arcana1Magus for card 1', () => {
            const result = useSvgCards(1, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should return Arcana21World for card 21', () => {
            const result = useSvgCards(21, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should handle all major arcana cards (0-21)', () => {
            for (let card = 0; card <= 21; card++) {
                const result = useSvgCards(card, defaultProps);
                expect(result).toBeTruthy();
                expect(result?.props).toMatchObject({
                    strokeWidth: '1',
                    fill: 'black',
                    ...defaultProps
                });
            }
        });
    });

    describe('Wands suit (22-35)', () => {
        it('should return Wand1 for card 22', () => {
            const result = useSvgCards(22, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should return WandKing for card 35', () => {
            const result = useSvgCards(35, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should handle all wands cards (22-35)', () => {
            for (let card = 22; card <= 35; card++) {
                const result = useSvgCards(card, defaultProps);
                expect(result).toBeTruthy();
            }
        });
    });

    describe('Cups suit (36-49)', () => {
        it('should return Cup1 for card 36', () => {
            const result = useSvgCards(36, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should return CupKing for card 49', () => {
            const result = useSvgCards(49, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should handle all cups cards (36-49)', () => {
            for (let card = 36; card <= 49; card++) {
                const result = useSvgCards(card, defaultProps);
                expect(result).toBeTruthy();
            }
        });
    });

    describe('Swords suit (50-63)', () => {
        it('should return Sword1 for card 50', () => {
            const result = useSvgCards(50, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should return SwordKing for card 63', () => {
            const result = useSvgCards(63, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should handle all swords cards (50-63)', () => {
            for (let card = 50; card <= 63; card++) {
                const result = useSvgCards(card, defaultProps);
                expect(result).toBeTruthy();
            }
        });
    });

    describe('Coins suit (64-77)', () => {
        it('should return Coin1 for card 64', () => {
            const result = useSvgCards(64, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should return CoinKing for card 77', () => {
            const result = useSvgCards(77, defaultProps);
            expect(result).toBeTruthy();
            expect(result?.type).toBeDefined();
        });

        it('should handle all coins cards (64-77)', () => {
            for (let card = 64; card <= 77; card++) {
                const result = useSvgCards(card, defaultProps);
                expect(result).toBeTruthy();
            }
        });
    });

    describe('Props handling', () => {
        it('should pass through custom props', () => {
            const customProps = {
                'width': 200,
                'height': 300,
                'className': 'test-class',
                'data-testid': 'card-svg'
            };
            const result = useSvgCards(0, customProps);

            expect(result?.props).toMatchObject({
                strokeWidth: '1',
                fill: 'black',
                ...customProps
            });
        });

        it('should apply default strokeWidth and fill properties', () => {
            const result = useSvgCards(10, defaultProps);

            expect(result?.props.strokeWidth).toBe('1');
            expect(result?.props.fill).toBe('black');
        });

        it('should allow overriding default properties', () => {
            const customProps = {
                strokeWidth: '2',
                fill: 'red',
                width: 150
            };
            const result = useSvgCards(5, customProps);

            expect(result?.props.strokeWidth).toBe('2');
            expect(result?.props.fill).toBe('red');
            expect(result?.props.width).toBe(150);
        });
    });

    describe('Edge cases', () => {
        it('should return null for invalid card numbers', () => {
            expect(useSvgCards(-1, defaultProps)).toBeNull();
            expect(useSvgCards(78, defaultProps)).toBeNull();
            expect(useSvgCards(100, defaultProps)).toBeNull();
        });

        it('should handle empty props object', () => {
            const result = useSvgCards(0, {});
            expect(result).toBeTruthy();
            expect(result?.props.strokeWidth).toBe('1');
            expect(result?.props.fill).toBe('black');
        });

        it('should work with all valid card numbers', () => {
            for (let card = 0; card <= 77; card++) {
                const result = useSvgCards(card, defaultProps);
                expect(result).toBeTruthy();
                expect(result?.type).toBeDefined();
            }
        });
    });

    describe('Complete deck validation', () => {
        it('should return exactly 78 different card components', () => {
            const cards = [];
            for (let i = 0; i <= 77; i++) {
                const card = useSvgCards(i, defaultProps);
                expect(card).toBeTruthy();
                cards.push(card);
            }
            expect(cards).toHaveLength(78);
        });

        it('should have correct distribution of suits', () => {
            // Major Arcana: 22 cards (0-21)
            // Wands: 14 cards (22-35)
            // Cups: 14 cards (36-49)
            // Swords: 14 cards (50-63)
            // Coins: 14 cards (64-77)
            // Total: 78 cards

            const majorArcana = [];
            const wands = [];
            const cups = [];
            const swords = [];
            const coins = [];

            for (let i = 0; i <= 21; i++) majorArcana.push(useSvgCards(i, defaultProps));
            for (let i = 22; i <= 35; i++) wands.push(useSvgCards(i, defaultProps));
            for (let i = 36; i <= 49; i++) cups.push(useSvgCards(i, defaultProps));
            for (let i = 50; i <= 63; i++) swords.push(useSvgCards(i, defaultProps));
            for (let i = 64; i <= 77; i++) coins.push(useSvgCards(i, defaultProps));

            expect(majorArcana).toHaveLength(22);
            expect(wands).toHaveLength(14);
            expect(cups).toHaveLength(14);
            expect(swords).toHaveLength(14);
            expect(coins).toHaveLength(14);

            // Verify all cards are truthy
            [...majorArcana, ...wands, ...cups, ...swords, ...coins].forEach(card => {
                expect(card).toBeTruthy();
            });
        });
    });
});
