import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar un error sino tenemos api key', async() =>{

        const resp = await getImagen();
        expect(resp).toBe('No se encontro la imagen');
    });
});