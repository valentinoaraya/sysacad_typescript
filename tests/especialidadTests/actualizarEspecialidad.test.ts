import { EspecialidadService } from "../../src/services/EspecialidadService"
import { instanciaEspecialidad as especialidad } from "../utils";

test("Deberia crear una especialidad en la base de datos y luego actualizar su campo letra", async () => {
    const especialidadCreada = await EspecialidadService.crearEspecialidad(especialidad)
    const nuevosDatosEspecialidad = {
        letra: "A"
    }
    const especialidadActualizada = await EspecialidadService.actualizarEspecialidad(especialidadCreada.id as number, nuevosDatosEspecialidad)

    expect(especialidadActualizada).toBeTruthy()
    expect(especialidadActualizada?.id).toBe(especialidadCreada.id)
    expect(especialidadActualizada?.nombre).toBe(especialidadCreada.nombre)
    expect(especialidadActualizada?.letra).toBe(especialidadCreada.letra)
    expect(especialidadActualizada?.observacion).toBe(especialidadCreada.observacion)
})