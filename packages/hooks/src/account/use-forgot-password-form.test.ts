import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import useForgotPasswordForm from './use-forgot-password-form';

describe('useForgotPasswordForm', () => {
    it('should initialize with empty errors', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        expect(result.current.errors).toEqual([]);
    });

    it('should clear errors on handleChange', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        // First add some errors
        act(() => {
            result.current.handleSubmit('invalid-email');
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
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('invalid-email');
        });

        expect(result.current.errors).toContainEqual({
            message: 'Invalid email address',
            type: 'emailAddress'
        });
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('should submit successfully with valid email', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('test@example.com');
        });

        expect(result.current.errors).toEqual([]);
        expect(mockSubmit).toHaveBeenCalledWith('test@example.com');
    });

    it('should not submit with invalid email', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('not-an-email');
        });

        expect(result.current.errors).toHaveLength(1);
        expect(result.current.errors[0]).toEqual({
            message: 'Invalid email address',
            type: 'emailAddress'
        });
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('should handle submit callback parameter correctly', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('user@test.com');
        });

        expect(mockSubmit).toHaveBeenCalledTimes(1);
        expect(mockSubmit).toHaveBeenCalledWith('user@test.com');
    });

    it('should handle empty email input', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        act(() => {
            result.current.handleSubmit('');
        });

        expect(result.current.errors).toContainEqual({
            message: 'Invalid email address',
            type: 'emailAddress'
        });
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('should handle multiple invalid email attempts', () => {
        const mockSubmit = vi.fn();
        const { result } = renderHook(() => useForgotPasswordForm(mockSubmit));

        // First invalid attempt
        act(() => {
            result.current.handleSubmit('invalid1');
        });

        expect(result.current.errors).toHaveLength(1);

        // Second invalid attempt
        act(() => {
            result.current.handleSubmit('invalid2');
        });

        expect(result.current.errors).toHaveLength(1);
        expect(mockSubmit).not.toHaveBeenCalled();
    });
});
