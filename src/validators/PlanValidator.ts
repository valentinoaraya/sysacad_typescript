import { BaseValidator } from "./BaseValidator";

export class PlanValidator extends BaseValidator {
    static validate(
        nombre: string,
        fechaInicio: string,
        fechaFin: string,
        observacion: string
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(fechaInicio, "fechaInicio")
        this.validateRequired(fechaFin, "fechaFin")
        this.validateRequired(observacion, "observacion")

        this.validateString(nombre, "nombre")
        this.validateString(fechaInicio, "fechaInicio")
        this.validateString(fechaFin, "fechaFin")
        this.validateString(observacion, "observacion")
    }
}