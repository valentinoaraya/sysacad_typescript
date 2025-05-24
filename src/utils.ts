import { Especialidad } from "./models/Especialidad";
import { Plan } from "./models/Plan";
import { Materia } from "./models/Materia";
import { Orientacion } from "./models/Orientacion";



// const nombre = "Ingenieria";
// export const especialidad_1 = new Especialidad("Ingenieria", "A", "OBSERVANDO");
// export const plan_1 = new Plan("2025", "10/10/2020", "11/11/2025", "funcional");
// export const materia_1 = new Materia( "Desarrollo de software", "1234", "Materia de programación");
// export const orientacion_1 = new Orientacion(nombre, especialidad_1, plan_1, materia_1);

export async function crearEspecialidadEjemeplo() {
    const especialidad = await globalThis.prisma.especialidad.create({
    data: {
        nombre: "Informática",
        letra: "A",
        observacion: "Especialidad de ejemplo"
        },
    });
    return new Especialidad( especialidad.nombre,especialidad.letra,especialidad.observacion,especialidad.id)
}
export async function crearPlanEjemplo(){
    const plan = await globalThis.prisma.plan.create({
    data: {
        nombre: "2025",
        fechaInicio: "2025-01-01",
        fechaFin: "2030-01-01",
        observacion: "Plan de ejemplo"
        }
    });
    return new Plan(plan.nombre,plan.fechaInicio,plan.fechaFin,plan.observacion,plan.id)
}

export async function crearMateriaEjemplo(){
    const materia = await globalThis.prisma.materia.create({
    data: {
        nombre: "Desarrollo de software",
        codigo: "MD101",
        observacion: "Materia de ejemplo"
        }
    });
    return new Materia(materia.nombre,materia.codigo,materia.observacion,materia.id)
}

// const especialidadModel = new Especialidad(
//     especialidad.nombre,
//     especialidad.letra,
//     especialidad.observacion,
//     especialidad.id
// );

// const planModel = new Plan(
//     plan.nombre,
//     plan.fechaInicio,
//     plan.fechaFin,
//     plan.observacion,
//     plan.id
// );

// const materiaModel = new Materia(
//     materia.nombre,
//     materia.codigo,
//     materia.observacion,
//     materia.id
// );

