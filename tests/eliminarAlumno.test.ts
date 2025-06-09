import { AlumnoService } from "../src/services/AlumnoService";
import { instanciaAlumno as alumno } from "./utils";

test('deberia eliminar una alumno por ID de la base de datos', async () => {
    const alumnoDB = await AlumnoService.crearAlumno(alumno);

    await AlumnoService.eliminarAlumno(alumnoDB.id as number);

    const alumnoBorrado = await globalThis.prisma.alumnos.findUnique({
        where: { id: alumnoDB.id }
    });

    expect(alumnoBorrado).toBeFalsy();
});

