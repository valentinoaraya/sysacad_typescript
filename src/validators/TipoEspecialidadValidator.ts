import { BaseValidator } from "./BaseValidator";

export class TipoEspecialidadVlaidator extends BaseValidator {
    static validate(
        nombre: string,
        nivel: string
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(nivel, "nivel")

        this.validateString(nombre, "nombre")
        this.validateString(nivel, "nivel")
    }
}