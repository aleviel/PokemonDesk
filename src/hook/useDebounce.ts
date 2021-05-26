import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearInterval(timer);
        };
    }, [value]);

    return debounceValue;
};

export default useDebounce;
