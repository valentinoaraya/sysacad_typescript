import { sexo, type tipoDocumento } from "../types";
import { BaseValidator } from "./BaseValidator";

export class AlumnoValidator extends BaseValidator {
    static validate(
        apellido: string,
        nombre: string,
        nroDocumento: string,
        tipoDocumento: tipoDocumento,
        fechaNacimiento: string,
        sexo: sexo,
        nroLegajo: number,
        fechaIngreso: Date,
        facultadId: number | undefined,
        especialidadId: number | undefined
    ): void {
        this.validateRequired(apellido, "apellido");
        this.validateRequired(nombre, "nombre");
        this.validateRequired(nroDocumento, "nroDocumento");
        this.validateRequired(tipoDocumento, "tipoDocumento");
        this.validateRequired(fechaNacimiento, "fechaNacimiento");
        this.validateRequired(sexo, "sexo");
        this.validateRequired(nroLegajo, "nroLegajo");
        this.validateRequired(fechaIngreso, "fechaIngreso");

        this.validateString(apellido, "apellido");
        this.validateString(nombre, "nombre");
        this.validateString(nroDocumento, "nroDocumento");
        this.validateString(fechaNacimiento, "fechaNacimiento");
        this.validateNumber(nroLegajo, "nroLegajo");
        this.validateDate(fechaIngreso, "fechaIngreso");
        if (facultadId !== undefined) {
            this.validateNumber(facultadId, "facultadId");
        }
        if (especialidadId !== undefined) {
            this.validateNumber(especialidadId, "especialidadId");
        }

        this.validateEnum(tipoDocumento, "tipoDocumento", {
            DNI: "DNI",
            LIBRETACIVICA: "LibretaCívica",
            LIBRETAENROLAMIENTO: "LibretaEnrolamiento",
            PASAPORTE: "Pasaporte"
        });

        this.validateEnum(sexo, "sexo", {
            MASCULINO: "M",
            FEMENINO: "F",
        });
    }
}
