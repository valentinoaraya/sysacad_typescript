import { Especialidad } from "./models/Especialidad";
import { Plan } from "./models/Plan";
import { Materia } from "./models/Materia";
import { Orientacion } from "./models/Orientacion";


export async function crearEspecialidadEjemeplo() {
    const especialidad = await globalThis.prisma.especialidades.create({
    data: {
        nombre: "Informática",
        letra: "A",
        observacion: "Especialidad de ejemplo"
        },
    });
    return new Especialidad( especialidad.nombre,especialidad.letra,especialidad.observacion,especialidad.id)
}
export async function crearPlanEjemplo(){
    const plan = await globalThis.prisma.planes.create({
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
    const materia = await globalThis.prisma.materias.create({
    data: {
        nombre: "Desarrollo de software",
        codigo: "MD101",
        observacion: "Materia de ejemplo"
        }
    });
    return new Materia(materia.nombre,materia.codigo,materia.observacion,materia.id)
}


