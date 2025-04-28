import { Especialidad } from "../models/Especialidad";
import { Materia } from "../models/Materia";
import { EspecialidadAtributos, MateriaAtributos, PlanAtributos } from "../types";
import { BaseValidator } from "./BaseValidator";

export class OrientacionValidator extends BaseValidator {
    static validate(
        nombre: string,
        especialidad: EspecialidadAtributos,
        plan: PlanAtributos,
        materia: MateriaAtributos
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(especialidad, "especialidad")
        this.validateRequired(plan, "plan")
        this.validateRequired(materia, "materia")

        this.validateString(nombre, "nombre")
        this.validateInstance(especialidad, "especialidad", Especialidad)
        this.validateInstance(materia, "materia", Materia)
    }
}