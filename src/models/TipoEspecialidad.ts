import { type TipoEspecialidadAtributos } from "./types";

export class TipoEspecialidad implements TipoEspecialidadAtributos {
    constructor (
        private readonly _nombre: string,
        private readonly _nivel: string
    ){
        if (!_nombre){
            throw new Error("El nombre es obligatorio")
        }
        if (!_nivel){
            throw new Error("El nivel es obligatorio")
        }
    }
    get nombre():string {return this._nombre}
    get nivel():string {return this._nivel}
}