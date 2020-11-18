import {
    getDataFromApi
} from "../promise";

describe('Prueba de promesas', () => {
    test('Prueba de recepción de data de API con promesa', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });
});