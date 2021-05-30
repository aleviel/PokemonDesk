import config from '../config';

function getUrlWithParams(endpointConfig: string, query: object) {
    return {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
        query: {
            ...query,
        },
    };
}

export default getUrlWithParams;
