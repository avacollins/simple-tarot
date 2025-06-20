import DisplayCardNames from './DisplayCardNames';
import React from 'react';
import { View } from 'react-native';

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <DisplayCardNames />
        </View>
    );
}
