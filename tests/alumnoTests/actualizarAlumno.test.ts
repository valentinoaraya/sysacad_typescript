import { AlumnoService } from "../../src/services/AlumnoService"
import { crearInstanciaAlumno } from "../utils";

test('debería crear un Alumno en la base de datos y luego actualizar su campo sigla', async () => {
    const alumno = await crearInstanciaAlumno();
    const alumnoCreado = await AlumnoService.crearAlumno(alumno);

    expect(alumnoCreado).toBeTruthy();
    expect(alumnoCreado?.apellido).toBe(alumno.apellido);

    const alumnoActualizado = await AlumnoService.actualizarAlumno(alumnoCreado!.id!, {
        apellido: "García"
    });

    expect(alumnoActualizado).toBeTruthy();
    expect(alumnoActualizado?.apellido).toBe("García");
})
