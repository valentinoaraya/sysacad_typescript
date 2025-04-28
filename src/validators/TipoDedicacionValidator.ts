import { BaseValidator } from "./BaseValidator";

export class TipoDedicacionValidator extends BaseValidator {
    static validate(
        nombre: string,
        observacion: string
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(observacion, "observacion")

        this.validateString(nombre, "nombre")
        this.validateString(observacion, "observacion")
    }
}