import { EspecialidadRepository } from "../repositories/EspecialidadRepository";
import { EspecialidadAtributos } from "../types";
export class EspecialidadService {
    private static readonly EspecialidadRepository = new EspecialidadRepository();

    static crearEspecialidad(especialidad: EspecialidadAtributos): Promise<EspecialidadAtributos> {
        return this.EspecialidadRepository.crear(especialidad);
    }

    static obtenerEspecialidadPorId(id: number): Promise<EspecialidadAtributos | null> {
        return this.EspecialidadRepository.buscarPorId(id);
    }

    static actualizarEspecialidad(id: number, nuevosDatos: Partial<EspecialidadAtributos>): Promise<EspecialidadAtributos | null> {
        return this.EspecialidadRepository.actualizar(id, nuevosDatos);
    }

    static eliminarEspecialidad(id: number): Promise<EspecialidadAtributos | null> {
        return this.EspecialidadRepository.eliminar(id);
    }
}
