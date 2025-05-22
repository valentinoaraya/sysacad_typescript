import { OrientacionService } from "../src/services/OrientacionService";
import { Orientacion } from "../src/models/Orientacion";
import { Especialidad } from "../src/models/Especialidad";
import { Plan } from "../src/models/Plan";
import { Materia } from "../src/models/Materia";

test("Deberia crear y guardas una orientacion en la base de datos", async () => {

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

    const orientacionCreada = await OrientacionService.crearOrientacion(orientacion);

    const orientacionBD = await globalThis.prisma.orientacion.findUnique({
        where: { id: orientacionCreada.id },
    });

    expect(orientacionBD).toBeTruthy();
    expect(orientacionBD?.nombre).toBe(orientacion.nombre);
    expect(orientacionBD?.especialidadId).toEqual(especialidad.id);
    expect(orientacionBD?.planId).toEqual(plan.id);
    expect(orientacionBD?.materiaId).toEqual(materia.id);
});
