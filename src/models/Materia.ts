import { type MateriaAtributos } from "../types";
import { MateriaValidator } from "../validators/MateriaValidator";

export class Materia implements MateriaAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _codigo: string,
        private readonly _observacion: string,
    ) {
        MateriaValidator.validate(_nombre, _codigo, _observacion);
    }

    get nombre(): string { return this._nombre }
    get codigo(): string { return this._codigo }
    get observacion(): string { return this._observacion }
}
