import { type DepartamentoAtributos } from "../types";
import { DepartamentoValidator } from "../validators/DepartamentoValidator";

export class Departamento implements DepartamentoAtributos {
    constructor(
        private readonly _nombre: string,
    ) {
        DepartamentoValidator.validate(_nombre)
    }

    get nombre(): string { return this._nombre }

    toPlainObject() {
        return {
            nombre: this._nombre
        };
    }
}
