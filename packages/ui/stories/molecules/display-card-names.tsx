import { ScrollView, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import React from 'react';

const GET_CARD_NAMES = gql`
    query GetCardNames {
        cards {
            name
        }
    }
`;

export default function DisplayCardNames() {
    const { loading, error, data } = useQuery(GET_CARD_NAMES);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error : {error.message}</Text>;

    return (
        <ScrollView>
            <View>
                {data.cards.map((card: { name: string }, index: number) => (
                    <Text key={index}>{card.name}</Text>
                ))}
            </View>
        </ScrollView>
    );
}
