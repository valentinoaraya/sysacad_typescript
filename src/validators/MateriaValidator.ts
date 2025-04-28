import { BaseValidator } from './BaseValidator';

export class MateriaValidator extends BaseValidator {
    static validate(nombre: string, codigo: string, observacion: string): void {
        this.validateRequired(nombre, 'nombre');
        this.validateRequired(codigo, 'código');
        this.validateRequired(observacion, 'observación');

        this.validateString(nombre, 'nombre');
        this.validateString(codigo, 'código');
        this.validateString(observacion, 'observación');
    }
}
