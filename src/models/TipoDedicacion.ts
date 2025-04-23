import { type TipoDedicacionAtributos } from "./types";

export class TipoDedicacion implements TipoDedicacionAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _observacion: string,
    ) {

        if (!_observacion) {
            throw new Error("Las observaciones son obligatorio");
        }
        if (!_nombre) {
            throw new Error("El nombre es obligatorio");
        }
    }

    get nombre(): string { return this._nombre }
    get observacion(): string { return this._observacion }
}