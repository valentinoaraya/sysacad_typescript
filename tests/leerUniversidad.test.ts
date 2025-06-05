import { UniversidadService } from "../src/services/UniversidadService";
import { instanciaUniversidad as universidad } from "./utils";

test('deberia leer una universidad por ID desde la base de datos', async () => {
    const universidadBD = await UniversidadService.crearUniversidad(universidad);

    const universidadEncontrada = await UniversidadService.obtenerUniversidadPorId(universidadBD.id as number);

    expect(universidadEncontrada).toBeTruthy();
    expect(universidadEncontrada?.nombre).toBe(universidad.nombre);
    expect(universidadEncontrada?.sigla).toBe(universidad.sigla);
});


