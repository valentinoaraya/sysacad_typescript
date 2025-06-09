import { EspecialidadService } from "../../src/services/EspecialidadService"
import { instanciaEspecialidad as especialidad } from "../utils";

test("Deberia crear y guardad una especialidad en la base de datos", async () => {
    const especialidadCreada = await EspecialidadService.crearEspecialidad(especialidad);
    const especialidadBD = await globalThis.prisma.especialidades.findUnique({
        where: { id: especialidadCreada.id },
    });

    expect(especialidadBD).toBeTruthy();
    expect(especialidadBD?.nombre).toBe(especialidad.nombre);
    expect(especialidadBD?.letra).toBe(especialidad.letra);
    expect(especialidadBD?.observacion).toBe(especialidad.observacion);
})
