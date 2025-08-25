import { AreaRepository } from "../repositories/AreaRepository";
import { AreaAtributos } from "../types";

export class AreaService {
    private static readonly areaRepository = new AreaRepository();

    static crearArea(area: AreaAtributos): Promise<AreaAtributos> {
        return this.areaRepository.crear(area);
    }

    static obtenerAreaPorId(id: number): Promise<AreaAtributos | null> {
        return this.areaRepository.buscarPorId(id);
    }

    static actualizarArea(id: number, nuevosDatos: Partial<AreaAtributos>): Promise<AreaAtributos | null>{
        return this.areaRepository.actualizar(id, nuevosDatos);
    }

    static eliminarArea(id: number): Promise<AreaAtributos | null> {
        return this.areaRepository.eliminar(id);
    }
}
