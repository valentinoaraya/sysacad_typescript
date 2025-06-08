import { type CargoAtributos, type AutoridadAtributos } from "../types";
import { AutoridadValidator } from "../validators/AutoridadValidator";

export class Autoridad implements AutoridadAtributos {
    constructor(
        private readonly _apellido: string,
        private readonly _nombre: string,
        private readonly _cargo: CargoAtributos,
        private readonly _telefono: string,
        private readonly _email: string,
    ) {
        AutoridadValidator.validate(_apellido, _nombre, _cargo, _telefono, _email)
    }

    get nombre(): string { return this._nombre }
    get apellido(): string { return this._apellido }
    get cargo(): CargoAtributos { return this._cargo }
    get telefono(): string { return this._telefono }
    get email(): string { return this._email }

    toPlainObject() {
        return {
            apellido: this.apellido,
            nombre: this.nombre,
            cargo: { connect: { id: this.cargo.id } },
            telefono: this.telefono,
            email: this.email
        }
    }

}
