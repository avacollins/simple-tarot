import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import useLoginForm from './use-login-form';

describe('useLoginForm', () => {
    it('should initialize with empty errors', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useLoginForm(mockSubmit));

        expect(result.current.errors).toEqual([]);
    });

    it('should clear errors on handleChange', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useLoginForm(mockSubmit));

        // First add some errors
        act(() => {
            result.current.handleSubmit('invalid-email', '123');
        });

        expect(result.current.errors.length).toBeGreaterThan(0);

        // Then clear them
        act(() => {
            result.current.handleChange();
        });

        expect(result.current.errors).toEqual([]);
    });

    it('should validate email and add error for invalid email', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useLoginForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('invalid-email', 'password123');
        });

        expect(result.current.errors).toContainEqual({
            message: 'Invalid email address',
            type: 'emailAddress'
        });
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('should validate password length and add error for short password', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useLoginForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('test@example.com', '123');
        });

        expect(result.current.errors).toContainEqual({
            message: 'Password must be at least 6 characters',
            type: 'password'
        });
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('should submit successfully with valid inputs', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useLoginForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('test@example.com', 'password123');
        });

        expect(result.current.errors).toEqual([]);
        expect(mockSubmit).toHaveBeenCalledWith('test@example.com', 'password123');
    });

    it('should accumulate multiple errors for multiple validation failures', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useLoginForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('invalid-email', '123');
        });

        expect(result.current.errors).toHaveLength(2);
        expect(result.current.errors).toContainEqual({
            message: 'Invalid email address',
            type: 'emailAddress'
        });
        expect(result.current.errors).toContainEqual({
            message: 'Password must be at least 6 characters',
            type: 'password'
        });
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('should handle submit callback parameter correctly', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useLoginForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('user@test.com', 'validpassword');
        });

        expect(mockSubmit).toHaveBeenCalledTimes(1);
        expect(mockSubmit).toHaveBeenCalledWith('user@test.com', 'validpassword');
    });
});
