import { MateriaAtributos } from "./types";

export class Materia implements MateriaAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _codigo: string,
        private readonly _observacion: string,
    ) {
        if (!_nombre) throw new Error("El nombre es obligatorio");
        if (!_codigo) throw new Error("El código es obligatorio");
        if (!_observacion) throw new Error("La observación es obligatoria");
    }

    get nombre(): string { return this._nombre }
    get codigo(): string { return this._codigo }
    get observacion(): string { return this._observacion }
}