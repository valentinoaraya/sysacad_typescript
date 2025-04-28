import { type TipoEspecialidadAtributos } from "../types";
import { TipoEspecialidadVlaidator } from "../validators/TipoEspecialidadValidator";

export class TipoEspecialidad implements TipoEspecialidadAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _nivel: string
    ) {
        TipoEspecialidadVlaidator.validate(_nombre, _nivel)
    }
    get nombre(): string { return this._nombre }
    get nivel(): string { return this._nivel }
}
