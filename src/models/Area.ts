import { type AreaAtributos } from "../types";
import { AreaValidator } from "../validators/AreaValidator";

export class Area implements AreaAtributos {
    constructor(
        private readonly _nombre: string,
    ) {
        AreaValidator.validate(_nombre)
    }

    get nombre(): string { return this._nombre }

    toPlainObject(): AreaAtributos {
            return {
                nombre: this.nombre
            };
}}

