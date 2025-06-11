'use client';

import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

export default function Home() {
    const [yellow, setYellow] = useState(false);
    const [red, setRed] = useState(false);
    const [green, setGreen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (red) {
                setRed(false);
                setGreen(true);

                return;
            }

            if (yellow) {
                setYellow(false);
                setRed(true);

                return;
            }

            if (green) {
                setYellow(true);
                setGreen(false);

                return;
            }

            setRed(true);
        }, 1000);

        return () => clearInterval(interval);
    }, [red, yellow, green]);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    padding: 20,
                    margin: 10,
                    opacity: red ? 1 : 0.5
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'yellow',
                    borderRadius: 50,
                    padding: 20,
                    margin: 10,
                    opacity: yellow ? 1 : 0.5
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'green',
                    borderRadius: 50,
                    padding: 20,
                    margin: 10,
                    opacity: green ? 1 : 0.5
                }}
            />
        </View>
    );
}
