import { type AlumnoAtributos, type tipoDocumento, type sexo } from "../types";
import { AlumnoValidator } from "../validators/AlumnoValidator";

export class Alumno implements AlumnoAtributos {
    constructor(
        private readonly _apellido: string,
        private readonly _nombre: string,
        private readonly _nroDocumento: string,
        private readonly _tipoDocumento: tipoDocumento,
        private readonly _fechaNacimiento: string,
        private readonly _sexo: sexo,
        private readonly _nroLegajo: number,
        private readonly _fechaIngreso: Date,
        private readonly _facultadId?: number,
        private readonly _especialidadId?: number,
    ) {
        AlumnoValidator.validate(
            _apellido,
            _nombre,
            _nroDocumento,
            _tipoDocumento,
            _fechaNacimiento,
            _sexo,
            _nroLegajo,
            _fechaIngreso,
            _facultadId,
            _especialidadId
        )
    }

    get apellido(): string { return this._apellido }
    get nombre(): string { return this._nombre }
    get nroDocumento(): string { return this._nroDocumento }
    get nroLegajo(): number { return this._nroLegajo }
    get tipoDocumento(): tipoDocumento { return this._tipoDocumento }
    get fechaIngreso(): Date { return this._fechaIngreso }
    get sexo(): sexo { return this._sexo }
    get fechaNacimiento(): string { return this._fechaNacimiento }
    get facultadId(): number | undefined { return this._facultadId }
    get especialidadId(): number | undefined { return this._especialidadId }

    toPlainObject(): AlumnoAtributos {
        return {
            apellido: this.apellido,
            nombre: this.nombre,
            nroDocumento: this.nroDocumento,
            nroLegajo: this.nroLegajo,
            tipoDocumento: this.tipoDocumento,
            fechaIngreso: this.fechaIngreso,
            sexo: this.sexo,
            fechaNacimiento: this.fechaNacimiento,
            facultadId: this.facultadId,
            especialidadId: this.especialidadId,
        };
    }
}
