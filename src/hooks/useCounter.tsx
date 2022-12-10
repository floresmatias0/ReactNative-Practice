import { useState } from 'react';

export const useCounter = (initial:number = 10) => {

    const [value, setValue] = useState(initial);

    const acc = (num :number) => {
        setValue( value + num );
    };

    return {
        value,
        acc
    }
}
