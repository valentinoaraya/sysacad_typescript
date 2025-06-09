import { EspecialidadService } from "../../src/services/EspecialidadService"
import { instanciaEspecialidad as especialidad } from "../utils";

test("Deberia eliminar una especialidad por ID en la base de datos", async () => {
    const especialidadBD = await EspecialidadService.crearEspecialidad(especialidad);

    await EspecialidadService.eliminarEspecialidad(especialidadBD.id as number);
    const especialidadBorrada = await globalThis.prisma.especialidades.findUnique({
        where: { id: especialidadBD.id },
    });

    expect(especialidadBorrada).toBeFalsy();
})
