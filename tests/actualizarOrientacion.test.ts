import { Materia } from "../src/models/Materia";
import { OrientacionService} from "../src/services/OrientacionService"
import { Plan } from "../src/models/Plan";
import { Especialidad } from "../src/models/Especialidad";
import { Orientacion } from "../src/models/Orientacion";

test("Deberia crear una clase Orientacion y luego actualizar su campo nombre" , async () => {

    const especialidad = await globalThis.prisma.especialidad.create({
        data: {
            nombre: "Informática",
            letra: "I",
            observacion: "Especialidad de ejemplo"
        }
    });

    const plan = await globalThis.prisma.plan.create({
        data: {
            nombre: "Plan 2025",
            fechaInicio: "2025-01-01",
            fechaFin: "2030-01-01",
            observacion: "Plan de ejemplo"
        }
    });

    const materia = await globalThis.prisma.materia.create({
        data: {
            nombre: "Matemática Discreta",
            codigo: "MD101",
            observacion: "Materia de ejemplo"
        }
    });

    const especialidadModel = new Especialidad(
        especialidad.nombre,
        especialidad.letra,
        especialidad.observacion,
        especialidad.id
    );

    const planModel = new Plan(
        plan.nombre,
        plan.fechaInicio,
        plan.fechaFin,
        plan.observacion,
        plan.id
    );

    const materiaModel = new Materia(
        materia.nombre,
        materia.codigo,
        materia.observacion,
        materia.id
    );

    const orientacion = new Orientacion(
        "Ingeniería de Software",
        especialidadModel,
        planModel,
        materiaModel
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