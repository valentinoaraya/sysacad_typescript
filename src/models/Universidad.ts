import { type UniversidadAtributos } from "../types";
import { UniversidadValidator } from "../validators/UniversidadValidator";

export class Universidad implements UniversidadAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _sigla: string,
        private readonly _id?: number,
    ) {
        UniversidadValidator.validate(_nombre, _sigla)
    }

    get nombre(): string { return this._nombre }
    get sigla(): string { return this._sigla }
    get id():number|undefined{return this._id}
}
