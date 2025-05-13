import { UniversidadService } from "../src/services/UniversidadService";
import { Universidad } from "../src/models/Universidad";

test('deberia leer una universidad por ID desde la base de datos', async () => {
    const nuevaUniversidad = new Universidad("Universidad Tecnologica Nacional", "UTN");
    const universidadBD = await UniversidadService.crearUniversidad(nuevaUniversidad);

    const universidadEncontrada = await UniversidadService.obtenerUniversidadPorId(universidadBD.id as number);

    expect(universidadEncontrada).toBeTruthy();
    expect(universidadEncontrada?.nombre).toBe(nuevaUniversidad.nombre);
    expect(universidadEncontrada?.sigla).toBe(nuevaUniversidad.sigla);
});


