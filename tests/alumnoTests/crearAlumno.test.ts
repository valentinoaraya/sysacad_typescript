import { AlumnoService } from "../../src/services/AlumnoService"
import { crearInstanciaAlumno } from "../utils";

test('deberia crear y gurdar un alumno en la base de datos', async () => {
    const alumno = await crearInstanciaAlumno();
    const alumnoCreado = await AlumnoService.crearAlumno(alumno);

    expect(alumnoCreado).toBeTruthy();
    expect(alumnoCreado?.apellido).toBe(alumno.apellido);
    expect(alumnoCreado?.nombre).toBe(alumno.nombre);
    expect(alumnoCreado?.nroDocumento).toBe(alumno.nroDocumento);
    expect(alumnoCreado?.fechaNacimiento).toBe(alumno.fechaNacimiento);
    expect(alumnoCreado?.sexo).toBe(alumno.sexo);
    expect(alumnoCreado?.nroLegajo).toBe(alumno.nroLegajo);
    expect(alumnoCreado?.fechaIngreso).toStrictEqual(alumno.fechaIngreso);
})
