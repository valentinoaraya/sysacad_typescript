export class BaseValidator {
    protected static validateRequired(value: any, fieldName: string): void {
        if (!value) {
            throw new Error(`El campo ${fieldName} es obligatorio`);
        }
    }

    protected static validateString(value: any, fieldName: string): void {
        if (typeof value !== 'string') {
            throw new Error(`El campo ${fieldName} debe ser una cadena de texto`);
        }
    }

    protected static validateNumber(value: any, fieldName: string): void {
        if (typeof value !== 'number') {
            throw new Error(`El campo ${fieldName} debe ser un número`);
        }
    }

    protected static validateBoolean(value: any, fieldName: string): void {
        if (typeof value !== 'boolean') {
            throw new Error(`El campo ${fieldName} debe ser un booleano`);
        }
    }

    protected static validateDate(value: any, fieldName: string): void {
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            throw new Error(`El campo ${fieldName} debe ser una fecha válida`);
        }
    }

    protected static validateEnum<T extends string | number>(value: any, fieldName: string, enumType: { [key: string]: T }): void {
        if (!Object.values(enumType).includes(value)) {
            throw new Error(`El campo ${fieldName} debe ser uno de los siguientes valores: ${Object.values(enumType).join(', ')}`);
        }
    }

    protected static validateType<T extends object>(value: any, fieldName: string, typeGuard: (value: any) => value is T): void {
        if (!typeGuard(value)) {
            throw new Error(`El campo ${fieldName} no cumple con la estructura de tipo esperada`);
        }
    }
}
