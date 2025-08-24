import { FacultadRepository } from "../repositories/FacultadRepository";
import { FacultadAtributos } from "../types";

export class FacultadService {
    private static readonly FacultadRepository = new FacultadRepository();

    static crearFacultad(facultad: FacultadAtributos): Promise<FacultadAtributos> {
        return this.FacultadRepository.crear(facultad);
    }
    static obtenerFacultadPorId(id: number): Promise<FacultadAtributos | null> {
        return this.FacultadRepository.buscarPorId(id);
    }
    static actualizarFacultad(id: number, nuevosDatos: Partial<FacultadAtributos>): Promise<FacultadAtributos | null> {
        return this.FacultadRepository.actualizar(id, nuevosDatos);
    }
    static eliminarFacultad(id: number): Promise<FacultadAtributos | null> {
        return this.FacultadRepository.eliminar(id);
    }

}
