import { DepartamentoRepository } from "../repositories/DepartamentoRepository";
import { DepartamentoAtributos } from "../types";

export class DepartamentoService {
    private static readonly departamentoRepository = new DepartamentoRepository();

    static crearDepartamento(departamento: DepartamentoAtributos): Promise<DepartamentoAtributos> {
        return this.departamentoRepository.crear(departamento);
    }

    static obtenerDepartamentoPorId(id: number): Promise<DepartamentoAtributos | null> {
        return this.departamentoRepository.buscarPorId(id);
    }

    static actualizarDepartamento(id: number, nuevosDatos: Partial<DepartamentoAtributos>): Promise<DepartamentoAtributos | null>{
        return this.departamentoRepository.actualizar(id, nuevosDatos);
    }

    static eliminarDepartamento(id: number): Promise<DepartamentoAtributos | null>{
        return this.departamentoRepository.eliminar(id);
    }
}
