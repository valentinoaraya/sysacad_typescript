import { CargoAtributos, type AutoridadAtributos} from "./types";

export class Autoridad implements AutoridadAtributos {
    constructor(
        private readonly _apellido: string,
        private readonly _nombre: string,
        private readonly _cargo: CargoAtributos,
        private readonly _telefono: string,
        private readonly _email: string,
    ) {

        if (!_apellido || !_nombre) {
            throw new Error("El apellido y nombre son obligatorios");
        }
        if (!_cargo) {
            throw new Error("El cargo es obligatorio");
        }
        if (_telefono) {
            throw new Error("El telefono es obligatorio");
        }
        if (_email) {
            throw new Error("El email o correo electrónico es obligatorio");
        }
    }

    get nombre(): string { return this._nombre }
    get apellido(): string { return this._apellido }
    get cargo(): CargoAtributos { return this._cargo }
    get telefono(): string { return this._telefono }
    get email(): string { return this._email }
}