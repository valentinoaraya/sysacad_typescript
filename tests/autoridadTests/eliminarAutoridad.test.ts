import { AutoridadService } from "../../src/services/AutoridadService";
import { crearInstanciaAutoridad } from "../utils";
test("deberia crear una clase de especialidad y luego eliminar su campo nombre", async () => {

    const autoridad = await crearInstanciaAutoridad()
    const autoridadCreada = await AutoridadService.crearAutoridad(autoridad)
    await AutoridadService.eliminarAutoridad(autoridadCreada.id as number)

    const autoridadBorrada = await globalThis.prisma.orientaciones.findUnique({
        where: { id: autoridadCreada.id }
    })

    expect(autoridadBorrada).toBeFalsy()

})
