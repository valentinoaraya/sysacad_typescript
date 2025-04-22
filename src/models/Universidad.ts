import { type UniversidadAtributos } from "./types";

export class Universidad implements UniversidadAtributos{
    public readonly nombre:string;
    public readonly sigla:string;

    constructor(params: UniversidadAtributos){
        if (!params.nombre){
            throw new Error("El nombre es obligatorio");
        }
        if (!params.sigla){
            throw new Error("La sigla es obligatoria");
        }
        this.nombre = params.nombre;
        this.sigla = params.sigla;
    
    }
}