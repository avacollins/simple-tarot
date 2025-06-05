import { KeyboardType, StyleSheet } from 'react-native';

import { Input } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import colors from '../utils/colors';

export interface FormInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    textContentType?:
        | 'emailAddress'
        | 'password'
        | 'username'
        | 'name'
        | 'telephoneNumber';
    hasError?: boolean;
    keyboardType: KeyboardType;
    onChangeText?: (text: string) => void;
    disabled?: boolean;
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'stretch'
    },
    formRow: {
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10
    },
    label: {
        color: colors.smoky_black?.base ?? '#000'
    },
    input: {
        height: 40,
        marginTop: 10,
        alignSelf: 'stretch'
    }
});

const FormInput: React.FC<FormInputProps> = ({
    hasError,
    label,
    onChangeText,
    value,
    placeholder,
    textContentType,
    keyboardType,
    disabled = false
}) => {
    const inputStyle = hasError
        ? [styles.input, { borderBottomColor: 'red', borderBottomWidth: 1 }]
        : styles.input;

    return (
        <View style={styles.formRow}>
            <Input
                label={label}
                labelStyle={styles.label}
                style={inputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                textContentType={textContentType}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={textContentType === 'password'}
                disabled={disabled}
            />
        </View>
    );
};

export default FormInput;
