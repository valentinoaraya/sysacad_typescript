import { type UniversidadAtributos } from "../types";
import { UniversidadValidator } from "../validators/UniversidadValidator";

export class Universidad implements UniversidadAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _sigla: string,
    ) {
        UniversidadValidator.validate(_nombre, _sigla)
    }

    get nombre(): string { return this._nombre }
    get sigla(): string { return this._sigla }

    toPlainObject(): UniversidadAtributos {
        return {
            nombre: this.nombre,
            sigla: this.sigla,
        };
    }
}
