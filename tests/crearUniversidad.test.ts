import { Universidad } from "../src/models/Universidad";
import { UniversidadService } from "../src/services/UniversidadService";

test('deberia crear y gurdar una universidad en la abse de datos', async () => {
    const nuevaUniversidad = new Universidad(
        "Universidad Tecnologica Nacional",
        "UTN"
    );
    const universidadCreada = await UniversidadService.crearUniversidad(nuevaUniversidad);

    const universidadBD = await globalThis.prisma.universidades.findUnique({
        where: { id: universidadCreada.id },
    })

    expect(universidadBD).toBeTruthy()
    expect(universidadBD?.nombre).toBe(nuevaUniversidad.nombre)
    expect(universidadBD?.sigla).toBe(nuevaUniversidad.sigla)
})

