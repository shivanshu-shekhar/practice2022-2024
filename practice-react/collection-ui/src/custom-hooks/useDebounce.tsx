import { useRef, useCallback } from 'react';

type DebounceCallback<T extends any[]> = (...args: T) => void;

const useDebounce = <T extends any[]>(callback: DebounceCallback<T>, delay: number) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedFunction = useCallback((...args: T) => {
        // Clear the previous timer if it exists
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Set a new timer
        timerRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return debouncedFunction;
};

export default useDebounce;