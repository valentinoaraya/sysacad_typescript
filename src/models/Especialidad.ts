import { type EspecialidadAtributos } from "./types";

export class Especialidad implements EspecialidadAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _letra: string,
        private readonly _observacion: string
    ) {
        if (!_nombre) {
            throw new Error('El nombre es obligatorio')
        }
        if (!_letra) {
            throw new Error('La letra es obligatorio')
        }
        if (!_observacion) {
            throw new Error('La observacion es obligatoria')
        }
    }
    get nombre(): string { return this._nombre }
    get letra(): string { return this._letra }
    get observacion(): string { return this._observacion }
}
