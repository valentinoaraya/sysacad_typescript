import { type DepartamentoAtributos } from "./types";

export class Departamento implements DepartamentoAtributos {
    constructor(
        private readonly _nombre: string,
    ) {
        if (!_nombre) throw new Error("El nombre es necesario")
    }

    get nombre(): string { return this._nombre }
}