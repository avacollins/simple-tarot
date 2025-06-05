import FormErrorText, { ErrorProp } from '../atoms/form-error-text';
import FormInput, { FormInputProps } from '../atoms/form-input';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export interface FormInputRowProps {
    inputProps: FormInputProps;
    textProps: ErrorProp;
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10
    }
});

const FormInputRow: React.FC<FormInputRowProps> = ({ inputProps, textProps }) => {
    console.log('FormInputRow', inputProps, textProps);

    return (
        <View style={styles.formRow}>
            <FormInput {...inputProps} />
            <FormErrorText error={textProps.error} />
        </View>
    );
};

export default FormInputRow;
