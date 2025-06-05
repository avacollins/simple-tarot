import { StyleSheet, Text, TextInputProps } from 'react-native';

import React from 'react';

export interface ErrorProp {
    error: FormError | false;
}

export type FormError = {
    message: string;
    type: TextInputProps['textContentType'];
};

const styles = StyleSheet.create({
    errorText: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
        color: 'red'
    }
});

const FormErrorText: React.FC<ErrorProp> = ({ error }) => (
    <Text style={styles.errorText}>{error && error?.message}</Text>
);

export default FormErrorText;
