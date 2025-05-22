import { type PlanAtributos } from "../types";
import { PlanValidator } from "../validators/PlanValidator";

export class Plan implements PlanAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _fechaInicio: string,
        private readonly _fechaFin: string,
        private readonly _observacion: string,
        private readonly _id?: number

    ) {
        PlanValidator.validate(_nombre, _fechaInicio, _fechaFin, _observacion)
    }
    get id(): number | undefined { return this._id}
    get nombre(): string { return this._nombre }
    get fechaInicio(): string { return this._fechaInicio }
    get fechaFin(): string { return this._fechaFin }
    get observacion(): string { return this._observacion }

    toPlainObject () {
        return {
            nombre : this.nombre,
            fechaInicio : this.fechaInicio,
            fechaFin : this.fechaFin,
            observacion : this.observacion
        }
    }
}
