import { MateriaRepository } from "../repositories/MateriaRepository";
import { MateriaAtributos } from "../types";

export class MateriaService {
    private static readonly MateriaRepository = new MateriaRepository();

    static crearMateria(materia: MateriaAtributos): Promise<MateriaAtributos> {
        return this.MateriaRepository.crear(materia);
    }
    static buscarMateriaPorId(id: number): Promise<MateriaAtributos | null> {
        return this.MateriaRepository.buscarPorId(id);
    }
    static actualizarMateria(id: number, nuevosDatos: Partial<MateriaAtributos>): Promise<MateriaAtributos | null> {
        return this.MateriaRepository.actualizar(id, nuevosDatos);
    }
    static eliminarMateria(id: number): Promise<MateriaAtributos | null> {
        return this.MateriaRepository.eliminar(id);
    }
}