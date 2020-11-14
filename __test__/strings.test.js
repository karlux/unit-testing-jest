describe('Comprobar cadenas de texto', () => {
    const cadena = "Un bonito texto";
    test('Debe contener el siguiente texto', () => {
        expect(cadena).toMatch(/bonito/);
    });
    test('No contiene la palabra', () => {
        expect(cadena).not.toMatch(/es/);
    });
    test('Comprobamos el tamaño de la cadena', () => {
        expect(cadena).toHaveLength(15);
    });
});