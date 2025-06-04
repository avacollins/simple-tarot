import { Dimensions, StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import colors from '../utils/colors';

const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

type BackgroundProps = {
    children: ReactNode;
    width?: number;
    height?: number;
};

const Background = ({
    children,
    width = viewWidth,
    height = viewHeight
}: BackgroundProps) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: width,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: colors.silver_sand?.base
        },
        background: {
            position: 'absolute',
            width: width,
            height: height,
            left: 0,
            right: 0,
            top: 500,
            paddingTop: height - 500,
            zIndex: 1
        },
        bottom: {
            position: 'absolute',
            bottom: -500,
            width: width,
            height: 600,
            backgroundColor: colors.silver_sand?.base,
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
