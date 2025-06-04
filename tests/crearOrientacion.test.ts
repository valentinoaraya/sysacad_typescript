import { OrientacionService } from "../src/services/OrientacionService";
import { Orientacion } from "../src/models/Orientacion";
import { crearEspecialidadEjemeplo } from "../src/utils"
import { crearMateriaEjemplo } from "../src/utils";
import { crearPlanEjemplo } from "../src/utils";

test("Deberia crear y guardas una orientacion en la base de datos", async () => {

    const especialidad = await crearEspecialidadEjemeplo();
    const materia = await crearMateriaEjemplo();
    const plan = await crearPlanEjemplo();
    const orientacion = new Orientacion(
        "Ingeniería de Software",
        especialidad,
        plan,
        materia
    );

    const orientacionCreada = await OrientacionService.crearOrientacion(orientacion);

    const orientacionBD = await globalThis.prisma.orientaciones.findUnique({
        where: { id: orientacionCreada.id },
    });

    expect(orientacionBD).toBeTruthy();
    expect(orientacionBD?.nombre).toBe(orientacion.nombre);
    expect(orientacionBD?.especialidadId).toEqual(especialidad.id);
    expect(orientacionBD?.planId).toEqual(plan.id);
    expect(orientacionBD?.materiaId).toEqual(materia.id);
});
