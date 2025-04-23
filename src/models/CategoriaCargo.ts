import { type CategoriaCargoAtributos } from "./types";

export class CategoriaCargo implements CategoriaCargoAtributos {
    constructor(
        private readonly _nombre: string,
    ) {

        if (!_nombre) {
            throw new Error("El nombre es obligatorio");
        }
    }

    get nombre(): string { return this._nombre }
}