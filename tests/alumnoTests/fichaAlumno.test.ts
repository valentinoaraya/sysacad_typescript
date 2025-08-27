import { crearInstanciaAlumno } from "../utils";
import { AlumnoService } from "../../src/services/AlumnoService";

test('debería generar una ficha en formato PDF', async () => {
    const alumno = await crearInstanciaAlumno();
    const alumnoCreado = await AlumnoService.crearAlumno(alumno);

    expect(alumnoCreado).toBeTruthy();

    const buffer = await AlumnoService.obtenerFichaAlumno(alumnoCreado!.id!);

    expect(buffer.buffer).toBeInstanceOf(Buffer);
    expect(buffer.json).toHaveProperty('apellido', alumnoCreado!.apellido);
});