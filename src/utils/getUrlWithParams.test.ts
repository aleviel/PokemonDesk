import getUrlWithParams from './getUrlWithParams';

describe('getUrlWithParams', () => {
    test('takes method "getPokemons" and empty object, give away object with keys: pathname, protocol, host and empty query', () => {
        const url = getUrlWithParams('getPokemons', {});

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: {},
            },
            body: {},
        });
    });

    test('takes method "getPokemons" and object {name: "pikachu"}, give away object with keys: pathname, protocol, host and query with name = Pikachu', () => {
        const url = getUrlWithParams('getPokemons', { name: 'Pikachu' });

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: { name: 'Pikachu' },
            },
            body: {},
        });
    });

    test('takes method "getPokemon" and {id = 25}, give away object with keys: pathname, protocol, host and empty query', () => {
        const url = getUrlWithParams('getPokemon', { id: 25 });

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemon/25',
                query: {},
            },
            body: {},
        });
    });
});
