import { BaseValidator } from "./BaseValidator";

export class EspecialidadValidator extends BaseValidator {
    static validate(
        nombre: string,
        letra: string,
        observacion: string
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(letra, "letra")
        this.validateRequired(observacion, "observacion")

        this.validateString(nombre, "nombre")
        this.validateString(letra, "letra")
        this.validateString(observacion, "observacion")
    }
}