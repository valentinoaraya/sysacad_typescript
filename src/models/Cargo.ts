import { type CategoriaCargoAtributos, type CargoAtributos, type TipoDedicacionAtributos } from "./types";

export class Cargo implements CargoAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _puntos: number,
        private readonly _categoriaCargo: CategoriaCargoAtributos,
        private readonly _tipoDedicacion: TipoDedicacionAtributos,
    ) {

        if (!_puntos) {
            throw new Error("El puntaje es obligatorio.");
        }
        if (!_nombre) {
            throw new Error("El nombre es obligatorio.");
        }
        if (!_categoriaCargo) {
            throw new Error("La categoria del cargo es obligatoria.");
        }
        if (!_tipoDedicacion) {
            throw new Error("El tipo de dedicacion es obligatorio.");
        }
    }

    get nombre(): string { return this._nombre }
    get puntos(): number { return this._puntos }
    get categoriaCargo(): CategoriaCargoAtributos { return this._categoriaCargo }
    get tipoDedicacion(): TipoDedicacionAtributos { return this._tipoDedicacion }
}