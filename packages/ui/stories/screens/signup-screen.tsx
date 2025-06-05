import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';

import MobileView from '../templates/mobile-view';
import React from 'react';
import SignupForm from '../organisms/signup-form';
import theme from '../utils/theme';

export interface SignupScreenProps {
    onSubmit: (email: string, password: string, confirmPassword: string) => void;
    error:
        | {
              message: string;
              type: 'email' | 'password' | 'confirmPassword';
          }
        | false;
}

const t = theme();

const SignupScreen: React.FC<SignupScreenProps> = ({ onSubmit, error }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleEmailChange = (text: string) => setEmail(text);
    const handlePasswordChange = (text: string) => setPassword(text);
    const handleConfirmPasswordChange = (text: string) => setConfirmPassword(text);

    return (
        <MobileView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                <View style={t.formWrapperStyle}>
                    <SignupForm
                        email={email}
                        password={password}
                        confirmPassword={confirmPassword}
                        error={error}
                        onEmailChange={handleEmailChange}
                        onPasswordChange={handlePasswordChange}
                        onConfirmPasswordChange={handleConfirmPasswordChange}
                        onSubmit={onSubmit.bind(null, email, password, confirmPassword)}
                    />
                </View>
            </KeyboardAvoidingView>
        </MobileView>
    );
};

export default SignupScreen;
