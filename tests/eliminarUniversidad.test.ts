import { Universidad } from "../src/models/Universidad";
import { UniversidadService } from "../src/services/UniversidadService";

test('deberia eliminar una universidad por ID de la base de datos', async () => {
    const nuevaUniversidad = new Universidad(
        "Universidad Tecnologica Nacional",
        "UTN"
    );
    const universidadDB = await UniversidadService.crearUniversidad(nuevaUniversidad);

    await UniversidadService.eliminarUniversidad(universidadDB.id as number);

    const universidadBorrada = await globalThis.prisma.universidades.findUnique({
        where: { id: universidadDB.id }
    });

    expect(universidadBorrada).toBeFalsy();
});

