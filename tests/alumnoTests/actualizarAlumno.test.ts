import { AlumnoService } from "../../src/services/AlumnoService"
import { instanciaAlumno as alumno } from "../utils"

test("debería crear un Alumno en la base de datos y luego actualizar su campo sigla", async () => {

    const alumnoCreado = await AlumnoService.crearAlumno(alumno)

    const nuevosDatosAlumnos = {
        nombre: "Ignacio",
        apellido: "Patiño",
        nroLegajo: 10175
    }

    const alumnoActualizado = await AlumnoService.actualizarAlumno(alumnoCreado.id as number, nuevosDatosAlumnos)

    expect(alumnoActualizado).toBeTruthy();
    expect(alumnoActualizado?.nombre).toBe(nuevosDatosAlumnos.nombre);
    expect(alumnoActualizado?.apellido).toBe(nuevosDatosAlumnos.apellido);
    expect(alumnoActualizado?.nroDocumento).toBe(alumno.nroDocumento);
    expect(alumnoActualizado?.fechaNacimiento).toBe(alumno.fechaNacimiento);
    expect(alumnoActualizado?.sexo).toBe(alumno.sexo);
    expect(alumnoActualizado?.nroLegajo).toBe(nuevosDatosAlumnos.nroLegajo);
    expect(alumnoActualizado?.fechaIngreso).toStrictEqual(alumno.fechaIngreso);
})