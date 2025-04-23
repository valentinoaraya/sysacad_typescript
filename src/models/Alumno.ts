import { type AlumnosAtributos, type tipoDocumento, type sexo } from "./types";

export class Alumno implements AlumnosAtributos {
    constructor(
        private readonly _apellido: string,
        private readonly _nombre: string,
        private readonly _nroDocumento: string,
        private readonly _tipoDocumento: tipoDocumento,
        private readonly _fechaNacimiento: string,
        private readonly _sexo: sexo,
        private readonly _nroLegajo: number,
        private readonly _fechaIngreso: Date,
    ) {

        if (!_apellido || !_nombre) {
            throw new Error("El apellido y nombre son obligatorios");
        }
        if (!_nroDocumento) {
            throw new Error("El número de documento es obligatorio");
        }
        if (_nroLegajo <= 0) {
            throw new Error("El número de legajo debe ser positivo");
        }

        const fechaNacimiento = new Date(_fechaNacimiento);
        if (isNaN(fechaNacimiento.getTime())) {
            throw new Error("La fecha de nacimiento no es válida");
        }
    }

    get nombre(): string { return this._nombre }
    get apellido(): string { return this._apellido }
    get nroDocumento(): string { return this._nroDocumento }
    get nroLegajo(): number { return this._nroLegajo }
    get tipoDocumento(): tipoDocumento { return this._tipoDocumento }
    get fechaIngreso(): Date { return this._fechaIngreso }
    get sexo(): sexo { return this._sexo }
    get fechaNacimiento(): string { return this._fechaNacimiento }
}