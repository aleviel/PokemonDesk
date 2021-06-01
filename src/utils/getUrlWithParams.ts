import config from '../config';

interface IAPIConfigURI {
    host: string;
    protocol: string;
    pathname: string;
    query: object;
}

interface IEndPoint {
    method: string;
    uri: {
        pathname: string;
        query?: object;
    };
}

function getUrlWithParams(endpointConfig: string, params: object) {
    const { method, uri }: IEndPoint = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];

    let body = {};
    const apiConfigUri: IAPIConfigURI = {
        ...config.client.server,
        ...uri,
        query: {
            ...uri.query,
        },
    };

    const query = {
        ...params,
    };

    const pathname = Object.keys(query).reduce((acc, val) => {
        if (acc.indexOf(`${val}`) !== -1) {
            const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
            delete query[val as keyof typeof query];
            return result;
        }
        return acc;
    }, apiConfigUri.pathname);
    apiConfigUri.pathname = pathname;

    if (method === 'GET') {
        apiConfigUri.query = {
            ...apiConfigUri.query,
            ...query,
        };
    } else {
        body = query;
    }
    return {
        method,
        uri: apiConfigUri,
        body,
    };
}

export default getUrlWithParams;
