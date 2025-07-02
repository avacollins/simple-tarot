import { Dimensions, Image, StyleSheet, View } from 'react-native';

import Background from '../atoms/background';
import MobileView from '../templates/mobile-view';
import NewReading from '../organisms/new-reading';
import QuickNav from '../organisms/quick-nav';
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
        <NewReading onStart={() => console.log('New Reading Started')} />
        <QuickNav />
    </MobileView>
);

export default HomeScreen;
