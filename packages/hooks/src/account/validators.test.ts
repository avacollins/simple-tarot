import { describe, expect, it } from 'vitest';
import { errorMessages, validateEmail, validatePassword } from './validators';

describe('validateEmail', () => {
    it('should return true for valid email addresses', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name@domain.co.uk')).toBe(true);
        expect(validateEmail('hello+tag@gmail.com')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('@domain.com')).toBe(false);
        expect(validateEmail('test@domain')).toBe(false);
        expect(validateEmail('test..test@domain.com')).toBe(false);
        expect(validateEmail('')).toBe(false);
        expect(validateEmail('test @domain.com')).toBe(false);
    });
});

describe('validatePassword', () => {
    it('should return true for passwords with 6 or more characters', () => {
        expect(validatePassword('123456')).toBe(true);
        expect(validatePassword('password123')).toBe(true);
        expect(validatePassword('verylongpassword')).toBe(true);
    });

    it('should return false for passwords with less than 6 characters', () => {
        expect(validatePassword('12345')).toBe(false);
        expect(validatePassword('abc')).toBe(false);
        expect(validatePassword('')).toBe(false);
        expect(validatePassword('a')).toBe(false);
    });
});

describe('errorMessages', () => {
    it('should contain correct error message objects', () => {
        expect(errorMessages.INVALID_EMAIL).toEqual({
            message: 'Invalid email address',
            type: 'emailAddress'
        });

        expect(errorMessages.PASSWORD_TOO_SHORT).toEqual({
            message: 'Password must be at least 6 characters',
            type: 'password'
        });

        expect(errorMessages.PASSWORD_MISMATCH).toEqual({
            message: 'Passwords do not match',
            type: 'newPassword'
        });
    });

    it('should have all expected error types', () => {
        expect(errorMessages).toHaveProperty('INVALID_EMAIL');
        expect(errorMessages).toHaveProperty('PASSWORD_TOO_SHORT');
        expect(errorMessages).toHaveProperty('PASSWORD_MISMATCH');
    });
});
