import Url from 'url';
import getUrlWithParams from './getUrlWithParams';

interface IOpions {
    method: string;
    body?: string;
}

interface IGetUrlWithParams {
    method: string;
    uri: Partial<any>;
    body: object;
}

async function request<T>(endpoint: string, query: object): Promise<T> {
    const { method, uri, body }: IGetUrlWithParams = getUrlWithParams(endpoint, query);
    const options: IOpions = {
        method,
    };
    if (Object.keys(body).length > 0) {
        options.body = JSON.stringify(body);
    }
    return fetch(Url.format(uri), options).then((res) => res.json());
}

export default request;
