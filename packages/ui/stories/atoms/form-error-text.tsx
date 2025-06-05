import { StyleSheet, Text } from 'react-native';

import React from 'react';

export interface FormErrorTextProps {
    error:
        | {
              message: string;
          }
        | false;
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
        color: 'red'
    }
});

const FormErrorText: React.FC<FormErrorTextProps> = ({ error }) => (
    <Text style={styles.errorText}>{error && error?.message}</Text>
);

export default FormErrorText;
