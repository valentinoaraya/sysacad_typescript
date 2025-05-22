import { PrivateResultType } from "@prisma/client/runtime/library";
import { type EspecialidadAtributos } from "../types";
import { EspecialidadValidator } from "../validators/EspecialidadValidator";

export class Especialidad implements EspecialidadAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _letra: string,
        private readonly _observacion: string,
        private readonly _id?: number
    ) {
        EspecialidadValidator.validate(_nombre, _letra, _observacion)
    }
    get id(): number | undefined { return this._id}
    get nombre(): string { return this._nombre }
    get letra(): string { return this._letra }
    get observacion(): string { return this._observacion }

    toPlainObject () {
        return {
            nombre : this.nombre,
            letra : this.letra,
            observacion : this.observacion
        }
    }
}
