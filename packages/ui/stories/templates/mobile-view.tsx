import { Dimensions, SafeAreaView } from 'react-native';

import React from 'react';
import theme from '../utils/theme';

export interface MobileSignupProps {
    children: React.ReactNode;
}

const t = theme();

const { width, height } = Dimensions.get('window');

const MobileView: React.FC<MobileSignupProps> = ({ children }) => (
    <SafeAreaView
        style={{
            width,
            height,
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: t.colors.grey0
        }}>
        {children}
    </SafeAreaView>
);

export default MobileView;
