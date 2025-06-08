import { type CategoriaCargoAtributos } from "../types";
import { CategoriaCargoValidator } from "../validators/CategoriaCargoValidator";

export class CategoriaCargo implements CategoriaCargoAtributos {
    constructor(
        private readonly _nombre: string,
    ) {
        CategoriaCargoValidator.validate(_nombre)
    }

    get nombre(): string { return this._nombre }
    toPlainObject(): CategoriaCargoAtributos {
        return {
            nombre: this.nombre,
        }
    }
}
