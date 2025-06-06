import { EspecialidadAtributos, MateriaAtributos, PlanAtributos } from "../types";
import { BaseValidator } from "./BaseValidator";

export class OrientacionValidator extends BaseValidator {
    private static esEspecialidadAtributos = (value: any): value is EspecialidadAtributos => {
        return (
            typeof value === 'object' &&
            value !== null &&
            'nombre' in value &&
            typeof value.nombre === 'string' &&
            'letra' in value &&
            typeof value.letra === 'string' &&
            'observacion' in value &&
            typeof value.observacion === 'string' &&
            (!('id' in value) || typeof value.id === 'number')
        );
    };

    private static esPlanAtributos = (value: any): value is PlanAtributos => {
        return (
            typeof value === 'object' &&
            value !== null &&
            'nombre' in value &&
            typeof value.nombre === 'string' &&
            'fechaInicio' in value &&
            typeof value.fechaInicio === 'string' &&
            'fechaFin' in value &&
            typeof value.fechaFin === 'string' &&
            'observacion' in value &&
            typeof value.observacion === 'string' &&
            (!('id' in value) || typeof value.id === 'number')
        );
    };

    private static esMateriaAtributos = (value: any): value is MateriaAtributos => {
        return (
            typeof value === 'object' &&
            value !== null &&
            'nombre' in value &&
            typeof value.nombre === 'string' &&
            'codigo' in value &&
            typeof value.codigo === 'string' &&
            'observacion' in value &&
            typeof value.observacion === 'string' &&
            (!('id' in value) || typeof value.id === 'number')
        );
    };

    static validate(
        nombre: string,
        especialidad: EspecialidadAtributos,
        plan: PlanAtributos,
        materia: MateriaAtributos
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(especialidad, "especialidad")
        this.validateRequired(plan, "plan")
        this.validateRequired(materia, "materia")

        this.validateString(nombre, "nombre")
        this.validateType(especialidad, "especialidad", this.esEspecialidadAtributos)
        this.validateType(plan, "plan", this.esPlanAtributos)
        this.validateType(materia, "materia", this.esMateriaAtributos)
    }
}