import Url from 'url';
import getUrlWithParams from './getUrlWithParams';

async function request<T>(endpoint: string, query: object): Promise<T> {
    const uri = Url.format({ ...getUrlWithParams(endpoint, query) });
    return fetch(uri).then((res) => res.json());
}

export default request;
