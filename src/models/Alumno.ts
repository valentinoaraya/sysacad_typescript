import { type AlumnosAtributos, type tipoDocumento, type sexo } from "../types";
import { AlumnoValidator } from "../validators/AlumnoValidator";

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
        AlumnoValidator.validate(
            _apellido,
            _nombre,
            _nroDocumento,
            _tipoDocumento,
            _fechaNacimiento,
            _sexo,
            _nroLegajo,
            _fechaIngreso
        )
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
