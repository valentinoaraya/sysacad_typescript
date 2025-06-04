import { AlumnoRepository } from "../repositories/AlumnoRepository";
import { AlumnosAtributos } from "../types";
export class EspecialidadService {
    private static readonly AlumnoRepository = new AlumnoRepository();

    static crearAlumno(alumno: AlumnosAtributos): Promise<AlumnosAtributos> {
        return this.AlumnoRepository.crear(alumno);
    }

    static obtenerAlumnoPorLegajo(nroLegajo: number): Promise<AlumnosAtributos | null> {
        return this.AlumnoRepository.buscarPorId(nroLegajo);
    }

    static actualizarAlumno(nroLegajo: number, nuevosDatos: Partial<AlumnosAtributos>): Promise<AlumnosAtributos> {
        return this.AlumnoRepository.actualizar(nroLegajo, nuevosDatos);
    }

    static eliminarAlumno(nroLegajo: number): Promise<void> {
        return this.AlumnoRepository.eliminar(nroLegajo);
    }
}
