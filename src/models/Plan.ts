import { type PlanAtributos } from "./types";

export class Plan implements PlanAtributos {
    constructor(
        private readonly _nombre : string,
        private readonly _fechaInicio : string,
        private readonly _fechaFin : string,
        private readonly _observacion : string
    ){
        if (!_nombre){
            throw new Error('El nombre es obligatorio')
        }
        if (!_fechaInicio){
            throw new Error('La fecha de incio es obligatoria')
        }
        if (!_fechaFin){
            throw new Error('La fecha de finilizacion es obligatoria')
        }
        if (!_observacion){
            throw new Error('La observacion es obligatoria')
        }
    }

    get nombre():string { return this._nombre }
    get fechaInicio():string { return this._fechaInicio }
    get fechaFin():string { return this._fechaFin}
    get observacion():string { return this._observacion}
}
