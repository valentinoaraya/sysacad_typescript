import { type FacultadAtributos } from "./types";

export class Facultad implements FacultadAtributos {
    public readonly nombre: string;
    public readonly abreviatura: string;
    public readonly directorio: string;
    public readonly sigla: string;
    public readonly codigoPostal: string;
    public readonly ciudad: string;
    public readonly domicilio: string;
    public readonly telefono: string;
    public readonly contacto: string;
    public readonly email: string;

    constructor(params: FacultadAtributos) {

        if (!params.nombre) {
            throw new Error("El nombre es obligatorio");
        }
        if (!params.abreviatura) {
            throw new Error("La abreviatura es obligatoria");
        }
        if (!params.sigla) {
            throw new Error("La sigla es obligatoria");
        }
        if (!params.ciudad) {
            throw new Error("La ciudad es obligatoria");
        }
        if (!params.domicilio) {
            throw new Error("El domicilio es obligatorio");
        }

        this.nombre = params.nombre;
        this.abreviatura = params.abreviatura;
        this.directorio = params.directorio;
        this.sigla = params.sigla;
        this.codigoPostal = params.codigoPostal;
        this.ciudad = params.ciudad;
        this.domicilio = params.domicilio;
        this.telefono = params.telefono;
        this.contacto = params.contacto;
        this.email = params.email;
    }
}
