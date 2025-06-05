import React, { useEffect, useState } from 'react';

import { ErrorProp } from '../atoms/form-error-text';
import FormButton from '../atoms/form-button';
import FormInputRow from '../molecules/form-input-row';
import { KeyboardType } from 'react-native';

export interface SignupFormProps {
    email: string;
    password: string;
    confirmPassword: string;
    onEmailChange: (text: string) => void;
    onPasswordChange: (text: string) => void;
    onConfirmPasswordChange: (text: string) => void;
    onSubmit: () => void;
    error: ErrorProp['error'];
}

const SignupForm: React.FC<SignupFormProps> = ({
    email,
    password,
    confirmPassword,
    error,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit
}) => {
    const [emailError, setEmailError] = useState<ErrorProp['error']>(false);
    const [passwordError, setPasswordError] = useState<ErrorProp['error']>(false);
    const [confirmPasswordError, setConfirmPasswordError] =
        useState<ErrorProp['error']>(false);

    useEffect(() => {
        setEmailError(error !== false && error.type === 'emailAddress' ? error : false);
        setPasswordError(error !== false && error.type === 'password' ? error : false);
        setConfirmPasswordError(
            error !== false && error.type === 'newPassword' ? error : false
        );
    }, [error]);

    const emailProps = {
        label: 'Email*',
        placeholder: 'Enter your email',
        value: email,
        textContentType: 'emailAddress' as const,
        hasError: !!emailError,
        onChangeText: onEmailChange
    };

    const passwordProps = {
        label: 'Password*',
        placeholder: 'Enter your password',
        value: password,
        textContentType: 'password' as const,
        hasError: !!passwordError,
        keyboardType: 'default' as KeyboardType,
        onChangeText: onPasswordChange
    };

    const confirmPasswordProps = {
        label: 'Confirm Password*',
        placeholder: 'Confirm your password',
        value: confirmPassword,
        textContentType: 'password' as const,
        hasError: !!confirmPasswordError,
        keyboardType: 'default' as KeyboardType,
        onChangeText: onConfirmPasswordChange
    };

    return (
        <>
            <FormInputRow inputProps={emailProps} textProps={{ error: emailError }} />
            <FormInputRow
                inputProps={passwordProps}
                textProps={{ error: passwordError }}
            />
            <FormInputRow
                inputProps={confirmPasswordProps}
                textProps={{ error: confirmPasswordError }}
            />
            <FormButton buttonLabel="Sign Up" btnEnabled={!error} onPress={onSubmit} />
        </>
    );
};

export default SignupForm;
