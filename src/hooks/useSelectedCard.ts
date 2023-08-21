import { useState } from 'react';

const useSelectedCard = (initialValue: number = -1): [number, (index: number) => void] => {
    const [selected, setSelected] = useState<number>(initialValue);

    const handleSelect = (index: number) => {
        if (selected === index) {
            setSelected(-1);
        } else {
            setSelected(index);
        }
    };

    return [selected, handleSelect];
};

export default useSelectedCard;