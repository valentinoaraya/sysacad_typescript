import { type MateriaAtributos } from "../types";
import { MateriaValidator } from "../validators/MateriaValidator";

export class Materia implements MateriaAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _codigo: string,
        private readonly _observacion: string,
        private readonly _id?: number
    ) {
        MateriaValidator.validate(_nombre, _codigo, _observacion);
    }
    get id(): number | undefined { return this._id}
    get nombre(): string { return this._nombre }
    get codigo(): string { return this._codigo }
    get observacion(): string { return this._observacion }

    toPlainObject () {
        return {
            nombre : this._nombre,
            codigo : this._codigo,
            observacion : this._observacion
        };
    }
}
