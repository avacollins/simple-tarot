import { FormError } from '@simpletarot/ui';

export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(email);
};

export const validatePassword = (password: string) => password.length >= 6;

export const errorMessages = {
    INVALID_EMAIL: { message: 'Invalid email address', type: 'emailAddress' },
    PASSWORD_TOO_SHORT: {
        message: 'Password must be at least 6 characters',
        type: 'password'
    },
    PASSWORD_MISMATCH: { message: 'Passwords do not match', type: 'newPassword' }
};
