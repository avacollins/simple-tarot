import { StyleSheet, View } from 'react-native';

import FormButton from '../atoms/form-button';
import FormErrorText from '../atoms/form-error-text';
import FormInput from '../atoms/form-input';
import React from 'react';

export interface SignupFormProps {
    email: string;
    password: string;
    confirmPassword: string;
    onEmailChange: (text: string) => void;
    onPasswordChange: (text: string) => void;
    onConfirmPasswordChange: (text: string) => void;
    onSubmit: () => void;
    error:
        | {
              message: string;
              type: 'email' | 'password' | 'confirmPassword';
          }
        | false;
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
}) => (
    <>
        <FormInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            textContentType="emailAddress"
            hasError={error && error.type === 'email'}
            keyboardType="email-address"
            onChangeText={onEmailChange}
        />
        <FormInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            textContentType="password"
            hasError={error && error.type === 'password'}
            keyboardType="default"
            onChangeText={onPasswordChange}
        />
        <FormInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            textContentType="password"
            hasError={error && error.type === 'confirmPassword'}
            keyboardType="default"
            onChangeText={onConfirmPasswordChange}
        />
        <FormErrorText error={error} />
        <FormButton buttonLabel="Sign Up" btnEnabled={!error} onPress={onSubmit} />
    </>
);

export default SignupForm;
