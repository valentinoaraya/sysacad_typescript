import { BaseValidator } from "./BaseValidator";

export class FacultadValidator extends BaseValidator {
    static validate(
        nombre: string,
        abreviatura: string,
        directorio: string,
        sigla: string,
        codigoPostal: string,
        ciudad: string,
        domicilio: string,
        telefono: string,
        contacto: string,
        email: string,
        universidadId: number | undefined
    ): void {
        this.validateRequired(nombre, "nombre")
        this.validateRequired(abreviatura, "abreviatura")
        this.validateRequired(directorio, "directorio")
        this.validateRequired(sigla, "sigla")
        this.validateRequired(codigoPostal, "codigoPostal")
        this.validateRequired(ciudad, "ciudad")
        this.validateRequired(domicilio, "domicilio")
        this.validateRequired(telefono, "telefono")
        this.validateRequired(contacto, "contacto")
        this.validateRequired(email, "email")

        this.validateString(nombre, "nombre")
        this.validateString(abreviatura, "abreviatura")
        this.validateString(directorio, "directorio")
        this.validateString(sigla, "sigla")
        this.validateString(codigoPostal, "codigoPostal")
        this.validateString(ciudad, "ciudad")
        this.validateString(domicilio, "domicilio")
        this.validateString(telefono, "telefono")
        this.validateString(contacto, "contacto")
        this.validateString(email, "email")
        if (universidadId !== undefined) {
            this.validateNumber(universidadId, "universidadId")
        }
    }
}