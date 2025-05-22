import { Especialidad } from "./models/Especialidad";
import { Plan } from "./models/Plan";
import { Materia } from "./models/Materia";
import { Orientacion } from "./models/Orientacion";


const nombre = "Ingenieria";
export const especialidad = new Especialidad("Ingenieria", "A", "OBSERVANDO");
export const plan = new Plan("2025", "10/10/2020", "11/11/2025", "funcional");
export const materia = new Materia( "Desarrollo de software", "1234", "Materia de programación");
export const orientacion = new Orientacion(nombre, especialidad, plan, materia);
