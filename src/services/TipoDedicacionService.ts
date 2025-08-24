
import { TipoDedicacionRepository } from "../repositories/TipoDedicacionRepository";
import { TipoDedicacionAtributos } from "../types";

export class TipoDedicacionService {
    private static readonly TipoDedicaionRepository = new TipoDedicacionRepository();

    static crearTipoDedicacion(tipoDedicacion: TipoDedicacionAtributos): Promise<TipoDedicacionAtributos> {
        return this.TipoDedicaionRepository.crear(tipoDedicacion);
    }

    static obtenerTipoDedicacionPorId(id: number): Promise<TipoDedicacionAtributos | null> {
        return this.TipoDedicaionRepository.buscarPorId(id);
    }

    static actualizarTipoDedicacion(id: number, nuevosDatos: Partial<TipoDedicacionAtributos>): Promise<TipoDedicacionAtributos | null> {
        return this.TipoDedicaionRepository.actualizar(id, nuevosDatos);
    }
    static eliminarTipoDedicacion(id: number): Promise<TipoDedicacionAtributos | null> {
        return this.TipoDedicaionRepository.eliminar(id);
    }
}
