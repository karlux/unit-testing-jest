import {
    sumar,
    restar,
    multiplicar,
    dividir
} from "../maths";

describe("Cálculos matemáticos", () => {
    test('prueba de sumar', () => {
        expect(sumar(1, 2)).toBe(3);
    });

    test("prueba de restar", () => {
        expect(restar(2, 1)).toBe(1);
    });

    test("prueba de multiplicar", () => {
        expect(multiplicar(2, 1)).toBe(2);
    });

    test("prueba de dividir", () => {
        expect(dividir(4, 2)).toBe(2);
    });
});