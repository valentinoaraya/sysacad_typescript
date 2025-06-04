import { AlumnoService } from "../src/services/EspecialidadService"
import { crearAlumnoEjemplo } from "../src/utils";

test("Deberia crear y guardad un alumno en la base de datos", async () =>{
    const alumno = await crearAlumnoEjemplo();
    const alumnoCreado = await AlumnoService.crearEspecialidad(alumno);
    const alumnoBD = await globalThis.prisma.alumnos.findUnique({
        where : {id : alumnoCreado.id},
    });

    expect(alumnoBD).toBeTruthy();
    expect(alumnoBD?.nombre).toBe(alumno.nombre);
    expect(alumnoBD?.letra).toBe(alumno.letra);
    expect(alumnoBD?.observacion).toBe(alumno.observacion);
})
