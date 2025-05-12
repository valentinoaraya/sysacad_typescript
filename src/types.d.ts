export type sexo = "M" | "F";
export type tipoDocumento = "DNI" | "LibretaCivica" | "LibretaEnrolamiento" | "Pasaporte"

export interface AlumnosAtributos {
    apellido: string;
    nombre: string;
    nroDocumento: string;
    tipoDocumento: tipoDocumento;
    fechaNacimiento: string;
    sexo: sexo;
    nroLegajo: number;
    fechaIngreso: Date;
}

export interface FacultadAtributos {
    nombre: string;
    abreviatura: string;
    directorio: string;
    sigla: string;
    ciudad: string;
    codigoPostal: string;
    telefono: string;
    domicilio: string;
    email: string;
    contacto: string;
}

export interface UniversidadAtributos {
    nombre: string;
    sigla: string;
    id?: number;
}

export interface CargoAtributos {
    nombre: string;
    puntos: number;
    categoriaCargo: CategoriaCargoAtributos;
    tipoDedicacion: TipoDedicacionAtributos;
}

export interface CategoriaCargoAtributos {
    nombre: string;
}

export interface TipoDedicacionAtributos {
    nombre: string;
    observacion: string;
}

export interface AutoridadAtributos {
    apellido: string;
    nombre: string;
    cargo: CargoAtributos;
    telefono: string;
    email: string;
}

export interface EspecialidadAtributos {
    nombre: string;
    letra: string;
    observacion: string;
}

export interface OrientacionAtributos {
    nombre: string;
    especialidad: EspecialidadAtributos;
    plan: PlanAtributos;
    materia: MateriaAtributos;
}

export interface GradoAtributos {
    nombre: string;
}

export interface MateriaAtributos {
    nombre: string;
    codigo: string;
    observacion: string;
}

export interface DepartamentoAtributos {
    nombre: string;
}

export interface TipoEspecialidadAtributos  {
    nombre : string;
    nivel : string;
}

export interface PlanAtributos {
    nombre : string;
    fechaInicio : string;
    fechaFin : string;
    observacion : string;
}