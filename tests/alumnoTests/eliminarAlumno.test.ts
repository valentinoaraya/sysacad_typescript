import { AlumnoService } from "../../src/services/AlumnoService"
import { crearInstanciaAlumno } from "../utils";

test('deberia eliminar una alumno por ID de la base de datos', async () => {
    const alumno = await crearInstanciaAlumno();
    const alumnoCreado = await AlumnoService.crearAlumno(alumno);

    expect(alumnoCreado).toBeTruthy();
    expect(alumnoCreado?.id).toBeDefined();

    const alumnoEliminado = await AlumnoService.eliminarAlumno(alumnoCreado!.id!);

    expect(alumnoEliminado).toBeTruthy();
    expect(alumnoEliminado?.id).toBe(alumnoCreado!.id);
})

