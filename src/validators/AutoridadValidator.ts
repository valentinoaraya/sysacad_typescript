import { CargoAtributos } from "../types";
import { BaseValidator } from "./BaseValidator";

export class AutoridadValidator extends BaseValidator {

    private static esCargoAtributos = (value: any): value is CargoAtributos => {
        return (
          typeof value === "object" &&
          value !== null &&
          "nombre" in value &&
          typeof value.nombre === "string" &&
          "puntos" in value &&
          typeof value.puntos === "number" &&
          "categoriaCargo" in value &&
          typeof value.categoriaCargo === "object" &&
          value.categoriaCargo !== null &&
          "nombre" in value.categoriaCargo &&
          typeof value.categoriaCargo.nombre === "string" &&
          "tipoDedicacion" in value &&
          typeof value.tipoDedicacion === "object" &&
          value.tipoDedicacion !== null &&
          "nombre" in value.tipoDedicacion &&
          typeof value.tipoDedicacion.nombre === "string" &&
          "observacion" in value.tipoDedicacion &&
          typeof value.tipoDedicacion.observacion === "string"
        );
      }

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

        this.validateType(cargo, "cargo", this.esCargoAtributos)
    }
}
