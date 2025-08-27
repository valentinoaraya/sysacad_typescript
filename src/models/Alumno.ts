import { type AlumnoAtributos, type tipoDocumento, type sexo } from "../types";
import { AlumnoValidator } from "../validators/AlumnoValidator";

export class Alumno implements AlumnoAtributos {
    constructor(
        readonly apellido: string,
        readonly nombre: string,
        readonly nroDocumento: string,
        readonly tipoDocumento: tipoDocumento,
        readonly fechaNacimiento: string,
        readonly sexo: sexo,
        readonly nroLegajo: number,
        readonly fechaIngreso: Date,
        readonly facultadId?: number,
        readonly especialidadId?: number,
    ) {
        AlumnoValidator.validate(
            apellido,
            nombre,
            nroDocumento,
            tipoDocumento,
            fechaNacimiento,
            sexo,
            nroLegajo,
            fechaIngreso,
            facultadId,
            especialidadId
        )
    }
}
