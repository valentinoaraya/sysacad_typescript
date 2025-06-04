import { Orientacion } from "../src/models/Orientacion";
import { OrientacionService } from "../src/services/OrientacionService";
import { crearEspecialidadEjemeplo } from "../src/utils"
import { crearMateriaEjemplo } from "../src/utils";
import { crearPlanEjemplo } from "../src/utils";

test("Deberia eliminar una orientacion por el ID en la base de datos",async () =>{

    const especialidad = await crearEspecialidadEjemeplo();
    const materia = await crearMateriaEjemplo();
    const plan = await crearPlanEjemplo();
    const orientacion = new Orientacion(
        "Ingeniería de Software",
        especialidad,
        plan,
        materia
    );


    const orientacionBD = await OrientacionService.crearOrientacion(orientacion);
    await OrientacionService.eliminarOrientacion(orientacionBD.id as number);

    const orientacionBorrada = await globalThis.prisma.orientaciones.findUnique({
        where: { id : orientacionBD.id }
    })

    expect(orientacionBorrada).toBeFalsy()
})