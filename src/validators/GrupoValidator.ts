import { BaseValidator } from "./BaseValidator";

export class GrupoValidator extends BaseValidator {
    static validate(nombre: string): void {
        this.validateRequired(nombre, "nombre")

        this.validateString(nombre, "nombre")
    }
}