import { OrientacionService} from "../src/services/OrientacionService";
import { Orientacion } from "../src/models/Orientacion";
import { crearEspecialidadEjemeplo } from "../src/utils"
import { crearMateriaEjemplo } from "../src/utils";
import { crearPlanEjemplo } from "../src/utils";



test("Deberia crear una clase Orientacion y luego actualizar su campo nombre" , async () => {

    const especialidad = await crearEspecialidadEjemeplo();
    const materia = await crearMateriaEjemplo();
    const plan = await crearPlanEjemplo();
    const orientacion = new Orientacion(
        "Ingeniería de Software",
        especialidad,
        plan,
        materia
    );

    const orientacionCreada = await OrientacionService.crearOrientacion(orientacion)

    const nuevosDatosOrientacion = {
        nombre : "Ing"
    }
    const orientacionActualizada = await OrientacionService.actualizarOrientacion(orientacionCreada.id as number, nuevosDatosOrientacion)

    expect(orientacionActualizada).toBeTruthy()
    expect(orientacionActualizada.id).toBe(orientacionCreada.id)
    expect(orientacionActualizada.nombre).toBe(nuevosDatosOrientacion.nombre)
    expect(orientacionActualizada.especialidad).toBe(orientacionCreada.especialidad)
    expect(orientacionActualizada.plan).toBe(orientacionCreada.plan)
    expect(orientacionActualizada.materia).toBe(orientacionCreada.materia)
})