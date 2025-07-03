import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import useInstructions from './use-instructions';

const mockInstructions = ['First instruction', 'Second instruction', 'Third instruction'];

describe('useInstructions', () => {
    it('should initialize with first instruction and count 0', () => {
        const { result } = renderHook(() => useInstructions(mockInstructions));

        expect(result.current.count).toBe(0);
        expect(result.current.instruction).toBe('First instruction');
    });

    it('should use default instructions when none provided', () => {
        const { result } = renderHook(() => useInstructions());

        expect(result.current.count).toBe(0);
        expect(result.current.instruction).toBe(
            'Think to yourself what you would like to learn from this reading, tap a card once you have that in your mind'
        );
    });

    it('should advance to next instruction when next() is called', () => {
        const { result } = renderHook(() => useInstructions(mockInstructions));

        act(() => {
            result.current.next();
        });

        expect(result.current.count).toBe(1);
        expect(result.current.instruction).toBe('Second instruction');
    });

    it('should jump to specific instruction when next(index) is called', () => {
        const { result } = renderHook(() => useInstructions(mockInstructions));

        act(() => {
            result.current.next(2);
        });

        expect(result.current.count).toBe(2);
        expect(result.current.instruction).toBe('Third instruction');
    });

    it('should return instruction at specific index with instructionAt', () => {
        const { result } = renderHook(() => useInstructions(mockInstructions));

        expect(result.current.instructionAt(0)).toBe('First instruction');
        expect(result.current.instructionAt(1)).toBe('Second instruction');
        expect(result.current.instructionAt(2)).toBe('Third instruction');
    });

    it('should handle multiple next() calls correctly', () => {
        const { result } = renderHook(() => useInstructions(mockInstructions));

        act(() => {
            result.current.next();
        });

        expect(result.current.count).toBe(1);

        act(() => {
            result.current.next();
        });

        expect(result.current.count).toBe(2);
        expect(result.current.instruction).toBe('Third instruction');
    });

    it('should work with default instructions array', () => {
        const { result } = renderHook(() => useInstructions());

        // Test that default instructions work
        expect(result.current.instructionAt(0)).toContain('Think to yourself');
        expect(result.current.instructionAt(6)).toBe(
            'Tap the deck to begin your reading'
        );

        act(() => {
            result.current.next();
        });

        expect(result.current.count).toBe(1);
        expect(result.current.instruction).toContain('Ask yourself');
    });
});
