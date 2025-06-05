import { OrientacionService } from "../src/services/OrientacionService";
import { instanciaOrientacion as orientacion } from "./utils";

test("Deberia crear y guardas una orientacion en la base de datos", async () => {

    const orientacionCreada = await OrientacionService.crearOrientacion(orientacion);

    const orientacionBD = await globalThis.prisma.orientaciones.findUnique({
        where: { id: orientacionCreada.id },
    });

    expect(orientacionBD).toBeTruthy();
    expect(orientacionBD?.nombre).toBe(orientacion.nombre);

    // TODO: Terminar de implementar estos tests

    //expect(orientacionBD?.especialidadId).toEqual(especialidad.id);
    //expect(orientacionBD?.planId).toEqual(plan.id);
    //expect(orientacionBD?.materiaId).toEqual(materia.id);
});
