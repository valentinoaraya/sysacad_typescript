import { OrientacionService } from "../src/services/OrientacionService";
import { instanciaOrientacion as orientacion } from "./utils";

test("Deberia eliminar una orientacion por el ID en la base de datos", async () => {

    const orientacionBD = await OrientacionService.crearOrientacion(orientacion);
    await OrientacionService.eliminarOrientacion(orientacionBD.id as number);

    const orientacionBorrada = await globalThis.prisma.orientaciones.findUnique({
        where: { id: orientacionBD.id }
    })

    expect(orientacionBorrada).toBeFalsy()
})