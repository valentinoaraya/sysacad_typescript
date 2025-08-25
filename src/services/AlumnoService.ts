import { AlumnoRepository } from "../repositories/AlumnoRepository";
import { AlumnoAtributos } from "../types";
import { obtenerTipoDocumento } from "./Documentos";

export class AlumnoService {
    private static readonly AlumnoRepository = new AlumnoRepository();

    static crearAlumno(alumno: AlumnoAtributos): Promise<AlumnoAtributos> {
        return this.AlumnoRepository.crear(alumno);
    }

    static obtenerAlumnoPorId(id: number): Promise<AlumnoAtributos | null> {
        return this.AlumnoRepository.buscarPorId(id);
    }

    static actualizarAlumno(nroLegajo: number, nuevosDatos: Partial<AlumnoAtributos>): Promise<AlumnoAtributos | null> {
        return this.AlumnoRepository.actualizar(nroLegajo, nuevosDatos);
    }

    static eliminarAlumno(nroLegajo: number): Promise<AlumnoAtributos | null> {
        return this.AlumnoRepository.eliminar(nroLegajo);
    }

    static async obtenerCertificadoAlumnoRegular(id: number, tipo: string): Promise<Buffer> {
        const alumno = await this.AlumnoRepository.buscarPorId(id)

        if (!alumno) throw new Error("Alumno no encontrado.")

        const documento = obtenerTipoDocumento(tipo)

        const context = {
            alumno: {
                ...alumno,
                tipo_documento: { sigla: alumno.tipoDocumento },
                nrodocumento: alumno.nroDocumento,
                nro_legajo: alumno.nroLegajo
            },
            especialidad: { nombre: "Ingeniería en Sistemas de Información" },
            facultad: { nombre: "Facultad de Ingeniería", ciudad: "Buenos Aires" },
            universidad: { nombre: "Universidad Tecnológica Nacional" },
            fecha: new Date().toLocaleDateString("es-AR"),
        }

        return documento.generar({
            carpeta: "/tmp",
            context,
            nombre: "certificado"
        })
    }
}
