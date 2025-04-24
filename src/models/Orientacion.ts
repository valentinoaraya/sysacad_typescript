import { OrientacionAtributos, EspecialidadAtributos, type PlanAtributos, type MateriaAtributos} from "./types";

export class Orientacion implements OrientacionAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _especialidad: EspecialidadAtributos,
        private readonly _plan: PlanAtributos,
        private readonly _materia: MateriaAtributos,
    ) {

        if (!_especialidad) {
            throw new Error("La especialidad es obligatoria.");
        }
        if (!_nombre) {
            throw new Error("El nombre es obligatorio.");
        }
        if (!_plan) {
            throw new Error("El plan es obligatorio.");
        }
        if (!_materia) {
            throw new Error("La materia es obligatoria.");
        }
    }

    get nombre(): string { return this._nombre }
    get especialidad(): EspecialidadAtributos { return this._especialidad }
    get plan(): PlanAtributos {return this._plan}
    get materia(): MateriaAtributos {return this._materia}
}