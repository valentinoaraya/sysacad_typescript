import { UniversidadRepository } from "../repositories/UniversidadRepository";
import { Universidad } from "../models/Universidad";

export class UniversidadService {
    static crearUniversidad(universidad: Universidad): Promise<Universidad> {
        return UniversidadRepository.crear(universidad);
    }
    static obtenerUniversidadPorId(id: number): Promise<Universidad | null> {
        return UniversidadRepository.buscarPorId(id);
    }
    
}
