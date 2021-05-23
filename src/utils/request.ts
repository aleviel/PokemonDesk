import Url from 'url';
import getUrlWithParams from './getUrlWithParams';

async function request(endpoint: string, limit: number = 15) {
    const uri = Url.format({ ...getUrlWithParams(endpoint), query: { limit } });
    return fetch(uri).then((res) => res.json());
}

export default request;
