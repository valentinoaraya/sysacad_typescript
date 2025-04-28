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

    protected static validateInstance<T>(value: any, fieldName: string, expectedType: new (...args: any[]) => T): void {
        if (!(value instanceof expectedType)) {
            throw new Error(`El campo ${fieldName} debe ser una instancia de ${expectedType.name}`);
        }
    }
}
