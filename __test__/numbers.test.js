import {
    numbers
} from "../numbers";

describe('comparación de números', () => {
    test('Mayor que', () => {
        expect(numbers(1, 2)).toBeGreaterThan(2);
    });
    test('Mayor que o igual', () => {
        expect(numbers(2, 2)).toBeGreaterThanOrEqual(-5);
    });
    test('Menor que', () => {
        expect(numbers(2, 2)).toBeLessThan(5);
    });
    test('Menor que o igual', () => {
        expect(numbers(2, 2)).toBeLessThanOrEqual(6);
    });
    test('Igualdad entre Números flotantes', () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
    });
});