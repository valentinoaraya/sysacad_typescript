import { type CategoriaCargoAtributos, type CargoAtributos, type TipoDedicacionAtributos } from "../types";
import { CargoValidator } from "../validators/CargoValidator";

export class Cargo implements CargoAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _puntos: number,
        private readonly _categoriaCargo: CategoriaCargoAtributos,
        private readonly _tipoDedicacion: TipoDedicacionAtributos,
    ) {
        CargoValidator.validate(_nombre, _puntos, _categoriaCargo, _tipoDedicacion)
    }

    get nombre(): string { return this._nombre }
    get puntos(): number { return this._puntos }
    get categoriaCargo(): CategoriaCargoAtributos { return this._categoriaCargo }
    get tipoDedicacion(): TipoDedicacionAtributos { return this._tipoDedicacion }

    toPlainObject(){
        return {
            nombre: this.nombre,
            puntos: this.puntos,
            categoriaCargo: { connect: { id: this.categoriaCargo.id } },
            tipoDedicacion: { connect: { id: this.tipoDedicacion.id } }
        };
    }

}
