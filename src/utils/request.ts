import Url from 'url';
import getUrlWithParams from './getUrlWithParams';
import config from '../config';

async function request(endpoint: keyof typeof config.client.endpoint, limit: number = 15) {
    const uri = Url.format({ ...getUrlWithParams(endpoint), query: { limit } });
    return fetch(uri).then((res) => res.json());
}

export default request;
