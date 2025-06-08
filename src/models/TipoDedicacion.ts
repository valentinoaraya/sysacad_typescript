import { type TipoDedicacionAtributos } from "../types";
import { TipoDedicacionValidator } from "../validators/TipoDedicacionValidator";

export class TipoDedicacion implements TipoDedicacionAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _observacion: string,
    ) {
        TipoDedicacionValidator.validate(_nombre, _observacion)
    }

    get nombre(): string { return this._nombre }
    get observacion(): string { return this._observacion }
    toPlainObject(): TipoDedicacionAtributos {
        return {
            nombre: this.nombre,
            observacion: this.observacion,
        }

    }
}
