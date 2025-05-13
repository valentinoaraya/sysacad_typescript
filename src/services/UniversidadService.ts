import { UniversidadRepository } from "../repositories/UniversidadRepository";
import { UniversidadAtributos } from "../types";

export class UniversidadService {

    static crearUniversidad(universidad: UniversidadAtributos): Promise<UniversidadAtributos> {
        return UniversidadRepository.crear(universidad);
    }

    static obtenerUniversidadPorId(id: number): Promise<UniversidadAtributos | null> {
        return UniversidadRepository.buscarPorId(id);
    }

    static actualizarUniversidad(id: number, nuevosDatos: Partial<UniversidadAtributos>): Promise<UniversidadAtributos> {
        return UniversidadRepository.actualizar(id, nuevosDatos)
    }

}
