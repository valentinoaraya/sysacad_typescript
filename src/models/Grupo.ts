import { type GrupoAtributos } from "../types";
import { GrupoValidator } from "../validators/GrupoValidator";

export class Grupo implements GrupoAtributos {
    constructor(
        private readonly _nombre: string,
    ) {
        GrupoValidator.validate(_nombre)
    }

    get nombre(): string { return this._nombre }

    toPlainObject(): GrupoAtributos {
            return {
                nombre: this.nombre
            };
}}