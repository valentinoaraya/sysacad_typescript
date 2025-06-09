import { UniversidadService } from "../../src/services/UniversidadService";
import { instanciaUniversidad as universidad } from "../utils";

test('deberia eliminar una universidad por ID de la base de datos', async () => {
    const universidadDB = await UniversidadService.crearUniversidad(universidad);

    await UniversidadService.eliminarUniversidad(universidadDB.id as number);

    const universidadBorrada = await globalThis.prisma.universidades.findUnique({
        where: { id: universidadDB.id }
    });

    expect(universidadBorrada).toBeFalsy();
});

