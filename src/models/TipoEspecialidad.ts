import { type TipoEspecialidadAtributos } from "../types";
import { TipoEspecialidadValidator } from "../validators/TipoEspecialidadValidator";

export class TipoEspecialidad implements TipoEspecialidadAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _nivel: string
    ) {
        TipoEspecialidadValidator.validate(_nombre, _nivel)
    }
    get nombre(): string { return this._nombre }
    get nivel(): string { return this._nivel }
    toPlainObject(): TipoEspecialidadAtributos {
        return {
            nombre: this.nombre,
            nivel: this.nivel
        }
    }
}
