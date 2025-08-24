import { GrupoRepository } from "../repositories/GrupoRepository";
import { GrupoAtributos } from "../types";

export class GrupoService {
    private static readonly grupoRepository = new GrupoRepository();

    static crearGrupo(grupo: GrupoAtributos): Promise<GrupoAtributos> {
        return this.grupoRepository.crear(grupo);
    }

    static obtenerGrupoPorId(id: number): Promise<GrupoAtributos | null> {
        return this.grupoRepository.buscarPorId(id);
    }

    static actualizarGrupo(id: number, nuevosDatos: Partial<GrupoAtributos>): Promise<GrupoAtributos | null> {
        return this.grupoRepository.actualizar(id, nuevosDatos);
    }

    static eliminarGrupo(id: number): Promise<GrupoAtributos | null> {
        return this.grupoRepository.eliminar(id);
    }
}