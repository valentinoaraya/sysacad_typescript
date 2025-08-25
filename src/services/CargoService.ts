import { CargoRepository } from "../repositories/CargoRepository";
import { CargoAtributos } from "../types";

export class CargoService {
    private static readonly CargoRepository = new CargoRepository();

    static crearCargo(cargo: CargoAtributos): Promise<CargoAtributos> {
        return this.CargoRepository.crear(cargo);
    }

    static obtenerCargoPorId(id: number): Promise<CargoAtributos | null> {
        return this.CargoRepository.buscarPorId(id);
    }

    static actualizarCargo(id: number, nuevosDatos: Partial<CargoAtributos>): Promise<CargoAtributos | null> {
        return this.CargoRepository.actualizar(id, nuevosDatos);
    }

    static eliminarCargo(id: number): Promise<CargoAtributos | null> {
        return this.CargoRepository.eliminar(id);
    }
}
