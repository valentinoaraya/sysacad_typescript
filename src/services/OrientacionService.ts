import { OrientacionRepository } from "../repositories/OrientacionRepository";
import { OrientacionAtributos } from "../types";

export class OrientacionService {
    private static readonly orientacionRepository = new OrientacionRepository();

    static crearOrientacion(orientacion: OrientacionAtributos): Promise<OrientacionAtributos> {
        return this.orientacionRepository.crear(orientacion);
    }
    static obtenerOrientacionPorId(id: number): Promise<OrientacionAtributos | null> {
        return this.orientacionRepository.buscarPorId(id);
    }
    static actualizarOrientacion(id: number, nuevosDatos: Partial<OrientacionAtributos>): Promise<OrientacionAtributos | null> {
        return this.orientacionRepository.actualizar(id, nuevosDatos);
    }
    static eliminarOrientacion(id: number): Promise<OrientacionAtributos | null> {
        return this.orientacionRepository.eliminar(id);
    }
}