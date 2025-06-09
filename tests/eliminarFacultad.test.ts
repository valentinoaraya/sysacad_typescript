import { instanciaFacultad } from "./utils";
import { FacultadService } from "../src/services/FacultadService";

test("deberia eliminar una facultad", async () => {

    const facultad = await FacultadService.crearFacultad(instanciaFacultad)
    await FacultadService.eliminarFacultad(facultad.id as number)
    const facultadEliminada = await globalThis.prisma.facultades.findUnique({
        where: { id: facultad.id as number },
    })

    expect(facultadEliminada).toBeFalsy()
})
