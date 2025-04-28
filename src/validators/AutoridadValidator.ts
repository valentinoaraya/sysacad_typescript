import { CargoAtributos } from "../types";
import { BaseValidator } from "./BaseValidator";
import { Cargo } from "../models/Cargo";

export class AutoridadValidator extends BaseValidator {
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

        this.validateInstance(cargo, "cargo", Cargo)
    }
}