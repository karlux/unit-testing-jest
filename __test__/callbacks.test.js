import {
    callbackMain
} from "../callbacks";

describe('Prueba de callbacks', () => {
    test('Prueba de recepción de data', done => {
        const callbackTest = data => {
            expect(data).toBe("Hola javascripters");
            done();
        };
        callbackMain(callbackTest);
    });
});