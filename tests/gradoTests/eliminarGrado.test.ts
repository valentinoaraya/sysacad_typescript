import { GradoService } from "../../src/services/GradoService";
import { instanciaGrado as grado } from "../utils";

test('deberia eliminar un grado por ID de la base de datos', async () => {
    const gradoDB = await GradoService.crearGrado(grado);

    await GradoService.eliminarGrado(gradoDB.id as number);

    const gradoBorrado = await globalThis.prisma.grados.findUnique({
        where: { id: gradoDB.id }
    });

    expect(gradoBorrado).toBeFalsy();
});

