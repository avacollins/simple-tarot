import { Dimensions, Image, StyleSheet, View } from 'react-native';

import Background from '../atoms/background';
import MobileView from '../templates/mobile-view';
import React from 'react';

const { height: screenHeight } = Dimensions.get('window');

const height = screenHeight;
const width = screenHeight * 0.707;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: height
    }
});

const HomeScreen = () => (
    <MobileView>
        <View style={styles.container}>
            <Background>
                <Image
                    style={{ width, height }}
                    source={require('../../assets/images/home.jpg')}
                    resizeMode="contain"
                />
            </Background>
        </View>
    </MobileView>
);

export default HomeScreen;
