import { BaseValidator } from "./BaseValidator";

export class DepartamentoValidator extends BaseValidator {
    static validate(nombre: string): void {
        this.validateRequired(nombre, "nombre")
        this.validateString(nombre, "nombre")
    }
}