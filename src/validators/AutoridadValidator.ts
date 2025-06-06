import { CargoAtributos } from "../types";
import { BaseValidator } from "./BaseValidator";

export class AutoridadValidator extends BaseValidator {

    //private static esCargoAtributos = (value: any): value is CargoAtributos => {
    //return (
    //    typeof value === 'object' &&
    //      value !== null &&
    //       'nombre' in value &&
    //        typeof value.nombre === 'string' &&
    //        'puntos' in value &&
    //        typeof value.puntos === 'number' &&

    //    )
    //}

    static validate(
        apellido: string,
        nombre: string,
        cargo: CargoAtributos,
        telefono: string,
        email: string
    ): void {
        this.validateRequired(apellido, "apellido")
        this.validateRequired(nombre, "nombre")
        this.validateRequired(cargo, "cargo")
        this.validateRequired(telefono, "telefono")
        this.validateRequired(email, "email")

        this.validateString(apellido, "apellido")
        this.validateString(nombre, "nombre")
        this.validateString(telefono, "telefono")
        this.validateString(email, "email")

        //this.validateType(cargo, "cargo")
    }
}