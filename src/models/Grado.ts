import { type GradoAtributos } from "./types";

export class Grado implements GradoAtributos {
    constructor(
        private readonly _nombre: string,
    ) {
        if (!_nombre) {
            throw new Error("El nombre es obligatorio");
        }
    }

    get nombre(): string { return this._nombre }
}

