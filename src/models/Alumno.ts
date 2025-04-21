import { type AlumnosAtributos, type tipoDocumento, type sexo } from "./types";

export class Alumno implements AlumnosAtributos {
    public readonly apellido: string;
    public readonly nombre: string;
    public readonly nroDocumento: string;
    public readonly tipoDocumento: tipoDocumento;
    public readonly fechaNacimiento: string;
    public readonly sexo: sexo;
    public readonly nroLegajo: number;
    public readonly fechaIngreso: Date;

    constructor(params: AlumnosAtributos) {

        if (!params.apellido || !params.nombre) {
            throw new Error("El apellido y nombre son obligatorios");
        }
        if (!params.nroDocumento) {
            throw new Error("El número de documento es obligatorio");
        }
        if (params.nroLegajo <= 0) {
            throw new Error("El número de legajo debe ser positivo");
        }

        const fechaNacimiento = new Date(params.fechaNacimiento);
        if (isNaN(fechaNacimiento.getTime())) {
            throw new Error("La fecha de nacimiento no es válida");
        }

        this.apellido = params.apellido;
        this.nombre = params.nombre;
        this.nroDocumento = params.nroDocumento;
        this.tipoDocumento = params.tipoDocumento;
        this.fechaNacimiento = params.fechaNacimiento;
        this.sexo = params.sexo;
        this.nroLegajo = params.nroLegajo;
        this.fechaIngreso = params.fechaIngreso;
    }
}