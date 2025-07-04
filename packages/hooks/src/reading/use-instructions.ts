import { useState } from 'react';

const DEFAULT = [
    'Think to yourself what you would like to learn from this reading, tap a card once you have that in your mind',
    'Ask yourself what answers you seek in this moment, tap a card to cut the deck,',
    'Allow thoughts to freely unveil in your mind while the cards are shuffled, tap a card to stop the shuffle at any time',
    'Returning focus again to you and your query, tap a card to cut the deck again',
    'Accept all possibilities in this moment, tap any card to stop shuffling when you are ready',
    'When you are ready, tap a card where the final cut is to be made',
    'Tap the deck to begin your reading'
];

const useInstructions = (instructions: string[] = DEFAULT) => {
    const [count, setCount] = useState(0);
    const [instruction, setInstruction] = useState(instructions[count]);

    const next = (from?: number) => {
        const _count = from ? from : count + 1;
        setCount(_count);
        setInstruction(instructions[_count]);
    };

    const instructionAt = (index: number) => instructions[index];

    return {
        count,
        instruction,
        instructionAt,
        next
    };
};
export default useInstructions;
