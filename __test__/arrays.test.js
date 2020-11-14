import {
    arrayColours,
    arrayFruits
} from '../arrays';

describe('Comprobar que existe un elemento', () => {
    test('Tiene banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene plátano', () => {
        expect(arrayFruits()).not.toContain('plátano');
    });
    test('Comprobar el tamaño del arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    test('Contiene azul', () => {
        expect(arrayColours()).toContain('azul');
    });
});