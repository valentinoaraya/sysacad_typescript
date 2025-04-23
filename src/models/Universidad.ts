import { type UniversidadAtributos } from "./types";

export class Universidad implements UniversidadAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _sigla: string
    ) {
        if (!_nombre) {
            throw new Error("El nombre es obligatorio");
        }
        if (!_sigla) {
            throw new Error("La sigla es obligatoria");
        }
    }

    get nombre(): string { return this._nombre }
    get sigla(): string { return this._sigla }
}