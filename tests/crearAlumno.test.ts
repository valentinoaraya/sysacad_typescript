import { Alumno } from "../src/models/Alumno";
import { AlumnoService } from "../src/services/AlumnoService"

test('deberia crear y gurdar un alumno en la base de datos', async () => {

    const fecha = new Date("2023-03-11")
    const nuevoAlumno = new Alumno(
        "Patiño",
        "Ignacio",
        "46397680",
        "DNI",
        "12/05/2005",
        "M",
        10176,
        fecha
    );

    const alumnoCreado = await AlumnoService.crearAlumno(nuevoAlumno);
    const alumnoDB = await globalThis.prisma.alumnos.findUnique({
        where: { nroLegajo: alumnoCreado.nroLegajo },
    })

    expect(alumnoDB).toBeTruthy();
    expect(alumnoDB?.apellido).toBe(nuevoAlumno.apellido);
    expect(alumnoDB?.nombre).toBe(nuevoAlumno.nombre);
    expect(alumnoDB?.nroDocumento).toBe(nuevoAlumno.nroDocumento);
    expect(alumnoDB?.fechaNacimiento).toBe(nuevoAlumno.fechaNacimiento);
    expect(alumnoDB?.sexo).toBe(nuevoAlumno.sexo);
    expect(alumnoDB?.nroLegajo).toBe(nuevoAlumno.nroLegajo);
    expect(alumnoDB?.fechaIngreso).toStrictEqual(nuevoAlumno.fechaIngreso);
})
