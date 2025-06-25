import { AlumnoRepository } from "../repositories/AlumnoRepository";
import { AlumnoAtributos } from "../types";

export class AlumnoService {
    private static readonly AlumnoRepository = new AlumnoRepository();

    static crearAlumno(alumno: AlumnoAtributos): Promise<AlumnoAtributos> {
        return this.AlumnoRepository.crear(alumno);
    }

    static obtenerAlumnoPorId(id: number): Promise<AlumnoAtributos | null> {
        return this.AlumnoRepository.buscarPorId(id);
    }

    static actualizarAlumno(nroLegajo: number, nuevosDatos: Partial<AlumnoAtributos>): Promise<AlumnoAtributos> {
        return this.AlumnoRepository.actualizar(nroLegajo, nuevosDatos);
    }

    static eliminarAlumno(nroLegajo: number): Promise<void> {
        return this.AlumnoRepository.eliminar(nroLegajo);
    }
}
