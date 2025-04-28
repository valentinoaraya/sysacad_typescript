import { type PlanAtributos } from "../types";
import { PlanValidator } from "../validators/PlanValidator";

export class Plan implements PlanAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _fechaInicio: string,
        private readonly _fechaFin: string,
        private readonly _observacion: string
    ) {
        PlanValidator.validate(_nombre, _fechaInicio, _fechaFin, _observacion)
    }

    get nombre(): string { return this._nombre }
    get fechaInicio(): string { return this._fechaInicio }
    get fechaFin(): string { return this._fechaFin }
    get observacion(): string { return this._observacion }
}
