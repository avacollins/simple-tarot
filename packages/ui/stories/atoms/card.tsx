/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import React from 'react';
import SvgCard from '../tests/mocks/svgCard';
import useSvgCards from '@simpletarot/hooks/src/cards/use-svg-cards';
import { vmin } from 'react-native-expo-viewport-units';

export type CardProps = {
    cardIndex: number;
    face?: boolean;
    mocked?: boolean;
    styleProps?: any;
    onPress?: () => void;
};

const width = vmin(9);
const height = vmin(18);

export const cardStyles = StyleSheet.create({
    card: {
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 1
    },
    cardImage: {
        position: 'absolute',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'black'
    }
});

export default function Card({
    cardIndex,
    face = false,
    mocked = false,
    onPress,
    styleProps
}: CardProps) {
    const _width = styleProps ? styleProps.width : width;
    const _height = styleProps ? styleProps.height : height;
    const opacity = styleProps ? styleProps.opacity : 1;
    const svgImage = mocked ? (
        <SvgCard />
    ) : (
        useSvgCards(cardIndex, {
            ...{ width: _width, height: _height, opacity }
        })
    );

    const cardImage = face ? (
        svgImage
    ) : (
        <Image
            style={[cardStyles.cardImage, { width: _width, height: _height }]}
            source={require('../../assets/images/cards/smith-waite/deck.jpg')}
        />
    );

    const cb = onPress ? onPress : () => ({});

    return (
        <TouchableOpacity style={[cardStyles.card, styleProps]} onPress={cb}>
            {cardImage}
        </TouchableOpacity>
    );
}
