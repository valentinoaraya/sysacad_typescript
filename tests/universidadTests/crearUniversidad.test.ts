import { UniversidadService } from "../../src/services/UniversidadService";
import { instanciaUniversidad as universidad } from "../utils";

test('deberia crear y gurdar una universidad en la abse de datos', async () => {

    const universidadCreada = await UniversidadService.crearUniversidad(universidad);

    const universidadBD = await globalThis.prisma.universidades.findUnique({
        where: { id: universidadCreada.id },
    })

    expect(universidadBD).toBeTruthy()
    expect(universidadBD?.nombre).toBe(universidad.nombre)
    expect(universidadBD?.sigla).toBe(universidad.sigla)
})

