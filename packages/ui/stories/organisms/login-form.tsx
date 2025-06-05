import React, { useEffect, useState } from 'react';

import { ErrorProp } from '../atoms/form-error-text';
import FormButton from '../atoms/form-button';
import FormInputRow from '../molecules/form-input-row';
import { KeyboardType } from 'react-native';

export interface LoginFormProps {
    email: string;
    password: string;
    onEmailChange: (text: string) => void;
    onPasswordChange: (text: string) => void;
    onSubmit: () => void;
    error: ErrorProp['error'];
}

const LoginForm: React.FC<LoginFormProps> = ({
    email,
    password,
    error,
    onEmailChange,
    onPasswordChange,
    onSubmit
}) => {
    const [emailError, setEmailError] = useState<ErrorProp['error']>(false);
    const [passwordError, setPasswordError] = useState<ErrorProp['error']>(false);

    useEffect(() => {
        setEmailError(error !== false && error.type === 'emailAddress' ? error : false);
        setPasswordError(error !== false && error.type === 'password' ? error : false);
    }, [error]);

    const emailProps = {
        label: 'Email*',
        placeholder: 'Enter your email',
        value: email,
        textContentType: 'emailAddress' as const,
        hasError: !!emailError,
        keyboardType: 'email-address' as KeyboardType,
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

    return (
        <>
            <FormInputRow inputProps={emailProps} textProps={{ error: emailError }} />
            <FormInputRow
                inputProps={passwordProps}
                textProps={{ error: passwordError }}
            />
            <FormButton buttonLabel="Login" onPress={onSubmit} btnEnabled={!error} />
        </>
    );
};

export default LoginForm;
