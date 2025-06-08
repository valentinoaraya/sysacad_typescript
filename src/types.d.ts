export type sexo = "M" | "F";
export type tipoDocumento = "DNI" | "LibretaCivica" | "LibretaEnrolamiento" | "Pasaporte"

export interface AlumnoAtributos {
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
    id?: number;
}

export interface CategoriaCargoAtributos {
    nombre: string;
    id?: number;
}

export interface TipoDedicacionAtributos {
    nombre: string;
    observacion: string;
    id?: number;
}

export interface AutoridadAtributos {
    apellido: string;
    nombre: string;
    cargo: CargoAtributos;
    telefono: string;
    email: string;
    id?: number;
}

export interface EspecialidadAtributos {
    nombre: string;
    letra: string;
    observacion: string;
    id?: number;
}

export interface OrientacionAtributos {
    nombre: string;
    especialidad: EspecialidadAtributos;
    plan: PlanAtributos;
    materia: MateriaAtributos;
    id?: number;
}

export interface GradoAtributos {
    nombre: string;
}

export interface MateriaAtributos {
    nombre: string;
    codigo: string;
    observacion: string|null;
    id?: number;
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
    id?: number;
}
