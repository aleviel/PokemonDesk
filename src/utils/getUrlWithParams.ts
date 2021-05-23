import config from '../config';

function getUrlWithParams(endpointConfig: string) {
    return {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    };
}

export default getUrlWithParams;
