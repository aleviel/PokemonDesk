import getUrlWithParams from './getUrlWithParams';

describe('getUrlWithParams', () => {
    test('takes method "getPokemons" and empty object, give away object with: method=GET, uri with { pathname, protocol, host and empty query} and empty body', () => {
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

    test('takes method "getPokemons" and object {name: "pikachu"}, give away object with:  method=GET, uri with { pathname, protocol, host and query= name : Pikachu} and empty body', () => {
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

    test('takes method "getPokemon" and {id = 25}, give away object with: method=GET, uri:{ pathname with id, protocol, host and empty query} and empty body', () => {
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

    test(`takes method 'createPokemon' and {name : Pikachu}, give away object with: method = POST, uri :{ pathname = /api/v1/pokemon/create, protocol, host, and empty query} and body {name : pikachu}`, () => {
        const url = getUrlWithParams('createPokemon', { name: 'Pikachu' });

        expect(url).toEqual({
            method: 'POST',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemon/create',
                query: {},
            },
            body: {
                name: 'Pikachu',
            },
        });
    });

    test(`takes method 'PATCH' and {id = 25}, give away object with method = POST, uri : {pathname = /api/v1/pokemon/25, protocol, host and empty query} and empty body`, () => {
        const url = getUrlWithParams('updatePokemon', { id: 25 });
        expect(url).toEqual({
            method: 'PATCH',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemon/25',
                query: {},
            },
            body: {},
        });
    });
    test(`takes method 'DELETE' and {id = 25}, give away object with method = POST, uri : {pathname = /api/v1/pokemon/delete/25, protocol, host and empty query} and empty body`, () => {
        const url = getUrlWithParams('deletePokemon', { id: 25 });
        expect(url).toEqual({
            method: 'DELETE',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemon/25/delete',
                query: {},
            },
            body: {},
        });
    });
});
