import { Dimensions, StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import colors from '../utils/colors';

const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

type BackgroundProps = {
    children: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            width: viewWidth,
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: colors.silver_sand?.base || '#fff'
        },
        background: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 500,
            paddingTop: viewHeight - 500,
            zIndex: 1
        },
        bottom: {
            position: 'absolute',
            bottom: -500,
            width: viewWidth,
            height: 600,
            backgroundColor: colors.spanish_gray?.base,
            zIndex: 0
        },
        foreground: {
            zIndex: 10
        }
    });

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[
                    colors.silver_sand?.base || '#fff',
                    colors.spanish_gray?.base || '#000'
                ]}
                locations={[0, 0.55]}
                style={styles.background}
            />
            <View style={styles.bottom} />
            <View style={styles.foreground}>{children}</View>
        </View>
    );
};

export default Background;
