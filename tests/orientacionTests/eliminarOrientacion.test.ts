import { OrientacionService } from "../../src/services/OrientacionService";
import { crearInstanciaOrientacion } from "../utils";

test("Deberia eliminar una orientacion por el ID en la base de datos", async () => {

    const orientacion = await crearInstanciaOrientacion()

    const orientacionBD = await OrientacionService.crearOrientacion(orientacion);
    await OrientacionService.eliminarOrientacion(orientacionBD.id as number);

    const orientacionBorrada = await globalThis.prisma.orientaciones.findUnique({
        where: { id: orientacionBD.id }
    })

    expect(orientacionBorrada).toBeFalsy()
})
