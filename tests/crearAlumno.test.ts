import { AlumnoService } from "../src/services/AlumnoService"
import { instanciaAlumno as alumno } from "./utils";

test('deberia crear y gurdar un alumno en la base de datos', async () => {

    const alumnoCreado = await AlumnoService.crearAlumno(alumno);
    const alumnoDB = await globalThis.prisma.alumnos.findUnique({
        where: { nroLegajo: alumnoCreado.nroLegajo },
    })

    expect(alumnoDB).toBeTruthy();
    expect(alumnoDB?.apellido).toBe(alumno.apellido);
    expect(alumnoDB?.nombre).toBe(alumno.nombre);
    expect(alumnoDB?.nroDocumento).toBe(alumno.nroDocumento);
    expect(alumnoDB?.fechaNacimiento).toBe(alumno.fechaNacimiento);
    expect(alumnoDB?.sexo).toBe(alumno.sexo);
    expect(alumnoDB?.nroLegajo).toBe(alumno.nroLegajo);
    expect(alumnoDB?.fechaIngreso).toStrictEqual(alumno.fechaIngreso);
})
