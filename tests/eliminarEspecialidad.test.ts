import { EspecialidadService } from "../src/services/EspecialidadService"

test("Deberia eliminar una especialidad por ID en la base de datos", async () => {
    const especialidad = await crearEspecialidadEjemeplo();
    const especialidadBD = await EspecialidadService.crearEspecialidad(especialidad);

    await EspecialidadService.eliminarEspecialidad(especialidadBD.id as number);
    const especialidadBorrada = await globalThis.prisma.especialidades.findUnique({
        where: { id: especialidadBD.id },
    });

    expect(especialidadBorrada).toBeFalsy();
})