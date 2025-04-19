type sexo = "M" | "F";
type tipoDocumento = "DNI" | "LibretaCivica" | "LibretaEnrolamiento" | "Pasaporte"

interface AlumnosAtributos {
    apellido: string;
    nombre: string;
    nroDocumento: string;
    tipoDocumento: tipoDocumento;
    fechaNacimiento: string;
    sexo: sexo;
    nroLegajo: number;
    fechaIngreso: Date;
}

class Alumno {

    public apellido: string;
    public nombre: string;
    public nroDocumento: string;
    public tipoDocumento: tipoDocumento;
    public fechaNacimiento: string;
    public sexo: sexo;
    public nroLegajo: number;
    public fechaIngreso: Date;
    
    constructor(params : AlumnosAtributos) {
        this.apellido = params.apellido
        this.nombre = params.nombre
        this.nroDocumento = params.nroDocumento
        this.tipoDocumento = params.tipoDocumento
        this.fechaNacimiento = params.fechaNacimiento
        this.sexo = params.sexo
        this.nroLegajo = params.nroLegajo
        this.fechaIngreso = params.fechaIngreso
    }
}