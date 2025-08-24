import { GradoRepository } from "../repositories/GradoRepository";
import { GradoAtributos } from "../types";

export class GradoService {
    private static readonly gradoRepository = new GradoRepository();

    static crearGrado(grado: GradoAtributos): Promise<GradoAtributos> {
        return this.gradoRepository.crear(grado);
    }

    static obtenerGradoPorId(id: number): Promise<GradoAtributos | null> {
        return this.gradoRepository.buscarPorId(id);
    }

    static actualizarGrado(id: number, nuevosDatos: Partial<GradoAtributos>): Promise<GradoAtributos | null> {
        return this.gradoRepository.actualizar(id, nuevosDatos);
    }

    static eliminarGrado(id: number): Promise<GradoAtributos | null> {
        return this.gradoRepository.eliminar(id);
    }
}
