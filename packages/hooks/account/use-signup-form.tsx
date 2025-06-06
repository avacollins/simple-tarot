import { validateEmail, validatePassword } from './validators';

import { FormError } from '@simpletarot/ui';
import React from 'react';

export interface useSignUpFormProps {
    errors: FormError[];
    handleChange: () => void;
    handleSubmit: (email: string, password: string, confirmPassword: string) => void;
}

const useSignUpForm = (
    submit: (emailAddress: string, password: string) => void
): useSignUpFormProps => {
    const [errors, setErrors] = React.useState<FormError[]>([]);

    const handleChange = () => {
        setErrors([]);
    };

    const handleSubmit = (email: string, password: string, confirmPassword: string) => {
        let valid = true;
        const newErrors: FormError[] = [];

        if (!validateEmail(email)) {
            newErrors.push({ message: 'Invalid email address', type: 'emailAddress' });
        }

        if (!validatePassword(password)) {
            newErrors.push({
                message: 'Password must be at least 6 characters',
                type: 'password'
            });
        }

        if (password !== confirmPassword) {
            newErrors.push({
                message: 'Passwords do not match',
                type: 'newPassword'
            });
        }
        if (newErrors.length > 0) {
            valid = false;
        } else {
            // Clear errors if validation passes
            setErrors(newErrors);
        }

        setErrors(newErrors);

        if (valid) {
            submit(email, password);
        }
    };

    return {
        errors,
        handleChange,
        handleSubmit
    };
};

export default useSignUpForm;
