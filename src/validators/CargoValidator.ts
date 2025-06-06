import { type CategoriaCargoAtributos, type TipoDedicacionAtributos } from "../types";
import { BaseValidator } from "./BaseValidator";

export class CargoValidator extends BaseValidator {
    private static esCategoriaCargoAtributos = (value: any): value is CategoriaCargoAtributos => {
        return (
            typeof value === 'object' &&
            value !== null &&
            'nombre' in value &&
            typeof value.nombre === 'string' &&
            (!('id' in value) || typeof value.id === 'number')
        );
    };

    private static esTipoDedicacionAtributos = (value: any): value is TipoDedicacionAtributos => {
        return (
            typeof value === 'object' &&
            value !== null &&
            'nombre' in value &&
            typeof value.nombre === 'string' &&
            'observacion' in value &&
            typeof value.observacion === 'string' &&
            (!('id' in value) || typeof value.id === 'number')
        );
    };

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
        this.validateType(categoriaCargo, "categoriaCargo", this.esCategoriaCargoAtributos)
        this.validateType(tipoDedicacion, "tipoDedicacion", this.esTipoDedicacionAtributos)
    }
}
