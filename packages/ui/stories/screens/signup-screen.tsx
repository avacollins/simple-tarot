import { KeyboardAvoidingView, Text, TextInputProps, View } from 'react-native';
import React, { useState } from 'react';

import MobileView from '../templates/mobile-view';
import SignupForm from '../organisms/signup-form';
import theme from '../utils/theme';
import { useSignupForm } from '@simpletarot/hooks';

export interface SignupScreenProps {
    onSubmit: (emailAddress: string, password: string) => void;
}

const t = theme();

const SignupScreen: React.FC<SignupScreenProps> = ({ onSubmit }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const { errors, handleChange, handleSubmit } = useSignupForm(onSubmit);

    const handleEmailChange = (text: string) => {
        handleChange();
        setEmail(text);
    };
    const handlePasswordChange = (text: string) => {
        handleChange();
        setPassword(text);
    };
    const handleConfirmPasswordChange = (text: string) => {
        handleChange();
        setConfirmPassword(text);
    };

    return (
        <MobileView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                <View style={t.formWrapperStyle}>
                    <SignupForm
                        email={email}
                        password={password}
                        confirmPassword={confirmPassword}
                        errors={errors}
                        onEmailChange={handleEmailChange}
                        onPasswordChange={handlePasswordChange}
                        onConfirmPasswordChange={handleConfirmPasswordChange}
                        onSubmit={handleSubmit.bind(
                            null,
                            email,
                            password,
                            confirmPassword
                        )}
                    />
                </View>
            </KeyboardAvoidingView>
        </MobileView>
    );
};

export default SignupScreen;
