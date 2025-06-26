import { StyleSheet, View } from 'react-native';

import MobileView from '../templates/mobile-view';
import NewReading from '../organisms/new-reading';
import React from 'react';

export interface NewReadingScreenProps {
    onStart: () => void;
}

const NewReadingScreen: React.FC<NewReadingScreenProps> = ({ onStart }) => {
    const handleStart = () => {
        onStart();
    };

    return (
        <MobileView>
            <View style={styles.container}>
                <NewReading onStart={handleStart} />
            </View>
        </MobileView>
    );
};

export default NewReadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
