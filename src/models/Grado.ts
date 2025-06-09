import { type GradoAtributos } from "../types";
import { GradoValidator } from "../validators/GradoValidator";

export class Grado implements GradoAtributos {
    constructor(
        private readonly _nombre: string,
    ) {
        GradoValidator.validate(_nombre)
    }

    get nombre(): string { return this._nombre }

    toPlainObject(): GradoAtributos {
            return {
                nombre: this.nombre
            };
}}

