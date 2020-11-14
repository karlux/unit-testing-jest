describe('comparadores comunes', () => {
    const user = {
        name: 'Carlos',
        lastname: 'Figueroa'
    };
    const user2 = {
        name: 'Carlos2',
        lastname: 'Figueroa2'
    };
    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('no es exactamente igual', () => {
        expect(user).not.toEqual(user2);
    });
});