import { KeyboardAvoidingView, View } from 'react-native';
import React, { useState } from 'react';

import LoginForm from '../organisms/login-form';
import MobileView from '../templates/mobile-view';
import theme from '../utils/theme';
import { useLoginForm } from '@simpletarot/hooks';

const t = theme();

export interface LoginScreenProps {
    onSubmit: (emailAddress: string, password: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { errors, handleChange, handleSubmit } = useLoginForm(onSubmit);

    const handleEmailChange = (text: string) => {
        handleChange();
        setEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        handleChange();
        setPassword(text);
    };

    const handleSubmitForm = () => {
        handleSubmit(email, password);
    };

    return (
        <MobileView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                <View style={t.formWrapperStyle}>
                    <LoginForm
                        email={email}
                        password={password}
                        errors={errors}
                        onEmailChange={handleEmailChange}
                        onPasswordChange={handlePasswordChange}
                        onSubmit={handleSubmitForm}
                    />
                </View>
            </KeyboardAvoidingView>
        </MobileView>
    );
};
export default LoginScreen;
