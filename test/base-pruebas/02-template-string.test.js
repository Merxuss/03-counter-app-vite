import { getSaludo } from "../../src/base-pruebas/02-template-string.js";

describe ('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola, Eduardo"', () => {

        const name = 'Eduardo';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`)

    });

});