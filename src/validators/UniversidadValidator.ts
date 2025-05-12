import { BaseValidator } from "./BaseValidator";

export class UniversidadValidator extends BaseValidator {
    static validate(
        nombre: string,
        sigla: string,
        id?:number|undefined
    ): void {
        
        this.validateRequired(nombre, "nombre")
        this.validateRequired(sigla, "sigla")
       
            
        this.validateString(nombre, "nombre")
        this.validateString(sigla, "sigla")
        
    }
}