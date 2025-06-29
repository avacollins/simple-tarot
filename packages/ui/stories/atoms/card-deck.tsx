import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';

import React from 'react';
import theme from '../utils/theme';
import { useAssets } from 'expo-asset';

export type DeckProps = {
    onPress: () => void;
};

const t = theme();

const viewHeight = Dimensions.get('window').height;
const basis = viewHeight - 100;
const imgWidth = basis * 0.4;
const imgHeight = basis * 0.71;

const styles = StyleSheet.create({
    deck: {
        marginTop: 10,
        shadowColor: t.colors.secondary,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 150,
        shadowOpacity: 0.95
    },
    image: {
        width: imgWidth,
        height: imgHeight
    }
});

export default function CardDeck({ onPress }: DeckProps) {
    const [assets] = useAssets([
        require('../../assets/images/cards/smith-waite/deck.jpg')
    ]);
    const img =
        assets && assets[0] ? (
            <Image style={styles.image} source={{ uri: assets[0].uri }} />
        ) : null;

    return (
        <TouchableOpacity style={[styles.deck, styles.image]} onPress={onPress}>
            {img}
        </TouchableOpacity>
    );
}
