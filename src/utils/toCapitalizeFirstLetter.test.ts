import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
    test('takes word with all chars in lower case', () => {
        const word = toCapitalizeFirstLetter('testword');
        expect(word).toEqual('Testword');
    });
    test('takes word with all chars in upper case', () => {
        const word = toCapitalizeFirstLetter('TESTWORD');
        expect(word).toEqual('Testword');
    });
    test('takes word with all chars in mixed case', () => {
        const word = toCapitalizeFirstLetter('TeStWOrD');
        expect(word).toEqual('Testword');
    });
});
