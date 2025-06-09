import { GradoService } from "../../src/services/GradoService";
import { instanciaGrado as grado } from "../utils";

test('deberia crear y gurdar un grado en la base de datos', async () => {

    const gradoCreado = await GradoService.crearGrado(grado);

    const gradoDB = await globalThis.prisma.grados.findUnique({
        where: { id: gradoCreado.id },
    })

    expect(gradoDB).toBeTruthy()
    expect(gradoDB?.nombre).toBe(grado.nombre)
})

