import { type OrientacionAtributos, type EspecialidadAtributos, type PlanAtributos, type MateriaAtributos } from "../types";
import { OrientacionValidator } from "../validators/OrientacionValidator";

export class Orientacion implements OrientacionAtributos {
    constructor(
        private readonly _nombre: string,
        private readonly _especialidad: EspecialidadAtributos,
        private readonly _plan: PlanAtributos,
        private readonly _materia: MateriaAtributos,
    ) {
        OrientacionValidator.validate(_nombre, _especialidad, _plan, _materia)
    }

    get nombre(): string { return this._nombre }
    get especialidad(): EspecialidadAtributos { return this._especialidad }
    get plan(): PlanAtributos { return this._plan }
    get materia(): MateriaAtributos { return this._materia }

    toPlainObject() {
        return {
            nombre: this.nombre,
            especialidad: { connect: { id: this.especialidad.id } },
            plan: { connect: { id: this.plan.id } },
            materia: { connect: { id: this.materia.id } }
        };
    }
}
