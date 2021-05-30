import { useEffect, useState } from 'react';
import request from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        (async function getData(): Promise<void> {
            try {
                const result = await request<T>(endpoint, query);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [deps]); // eslint-disable-line react-hooks/exhaustive-deps
    return { isError, isLoading, data };
};
export default useData;
