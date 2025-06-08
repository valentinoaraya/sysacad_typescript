import { AutoridadRepository } from "../repositories/AutoridadRepository";
import { AutoridadAtributos } from "../types";

export class AutoridadService {
    private static readonly AutoridadRepository = new AutoridadRepository();

    static crearAutoridad(autoridad: AutoridadAtributos): Promise<AutoridadAtributos> {
        return this.AutoridadRepository.crear(autoridad);
    }
    static obtenerAutoridadPorId(id: number): Promise<AutoridadAtributos | null> {
        return this.AutoridadRepository.buscarPorId(id);
    }
    static actualizarAutoridad(id: number, nuevosDatos: Partial<AutoridadAtributos>): Promise<AutoridadAtributos> {
        return this.AutoridadRepository.actualizar(id, nuevosDatos);
    }
    static eliminarAutoridad(id: number): Promise<void> {
        return this.AutoridadRepository.eliminar(id);
    }
}
