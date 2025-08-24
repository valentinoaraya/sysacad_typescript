import { CategoriaCargoRepository } from "../repositories/CategoriaCargoRepository";
import { CategoriaCargoAtributos } from "../types";

export class CategoriaCargoService {
    private static readonly CategoriaCargoRepository = new CategoriaCargoRepository();

    static crearCategoriaCargo(categoriaCargo: CategoriaCargoAtributos): Promise<CategoriaCargoAtributos> {
        return this.CategoriaCargoRepository.crear(categoriaCargo);
    }

    static obtenerCategoriaCargoPorId(id: number): Promise<CategoriaCargoAtributos | null> {
        return this.CategoriaCargoRepository.buscarPorId(id);
    }

    static actualizarCategoriaCargo(id: number, nuevosDatos: Partial<CategoriaCargoAtributos>): Promise<CategoriaCargoAtributos | null> {
        return this.CategoriaCargoRepository.actualizar(id, nuevosDatos);
    }
    static eliminarCategoriaCargo(id: number): Promise<CategoriaCargoAtributos | null> {
        return this.CategoriaCargoRepository.eliminar(id);
    }
}
