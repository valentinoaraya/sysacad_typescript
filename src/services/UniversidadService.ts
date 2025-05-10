import { type UniversidadAtributos } from "../types";
import { UniversidadRepository } from "../repositories/UniversidadRepository";

export class UniversidadService {
    static crearUniversidad(universidad: UniversidadAtributos) {
        UniversidadRepository.crear(universidad)
    }
}