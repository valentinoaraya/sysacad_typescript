import { CategoriaCargo } from "../models/CategoriaCargo";
import { TipoDedicacion } from "../models/TipoDedicacion";
import { type CategoriaCargoAtributos, type TipoDedicacionAtributos } from "../types";
import { BaseValidator } from "./BaseValidator";

export class CargoValidator extends BaseValidator {
    static validate(
        nombre: string,
        puntos: number,
        categoriaCargo: CategoriaCargoAtributos,
        tipoDedicacion: TipoDedicacionAtributos
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(puntos, "puntos")
        this.validateRequired(categoriaCargo, "categoriaCargo")
        this.validateRequired(tipoDedicacion, "tipoDedicacion")

        this.validateString(nombre, "nombre")
        this.validateNumber(puntos, "puntos")
        this.validateInstance(categoriaCargo, "categoriaCargo", CategoriaCargo)
        this.validateInstance(tipoDedicacion, "tipoDedicacion", TipoDedicacion)
    }
}