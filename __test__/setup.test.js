// Después de cada prueba
afterEach(() => console.log("Después de cada prueba"));
// Después de todas las pruebas
afterAll(() => console.log("Después de todas las pruebas"));
// Antes de cada prueba
beforeEach(() => console.log("Antes de cada prueba"));
// Antes de todas las pruebas
beforeAll(() => console.log("Antes de todas las pruebas"));

describe('Preparar antes de ejecutar', () => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });
    test('Es false', () => {
        expect(false).toBeFalsy();
    });
});