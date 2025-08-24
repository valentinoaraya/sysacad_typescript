import { UniversidadRepository } from "../repositories/UniversidadRepository";
import { UniversidadAtributos } from "../types";

export class UniversidadService {
    private static readonly universidadRepository = new UniversidadRepository();

    static crearUniversidad(universidad: UniversidadAtributos): Promise<UniversidadAtributos> {
        return this.universidadRepository.crear(universidad);
    }

    static obtenerUniversidadPorId(id: number): Promise<UniversidadAtributos | null> {
        return this.universidadRepository.buscarPorId(id);
    }

    static actualizarUniversidad(id: number, nuevosDatos: Partial<UniversidadAtributos>): Promise<UniversidadAtributos | null> {
        return this.universidadRepository.actualizar(id, nuevosDatos);
    }

    static eliminarUniversidad(id: number): Promise<UniversidadAtributos | null> {
        return this.universidadRepository.eliminar(id);
    }
}
