import { UniversidadService } from "../../src/services/UniversidadService"
import { instanciaUniversidad as universidad } from "../utils"

test("debería crear una Universidad en la base de datos y luego actualizar su campo sigla", async () => {

    const universidadCreada = await UniversidadService.crearUniversidad(universidad)

    const nuevosDatosUniversidad = {
        sigla: "UTN - FRSR"
    }

    const universidadActualizada = await UniversidadService.actualizarUniversidad(universidadCreada.id as number, nuevosDatosUniversidad)

    expect(universidadActualizada).toBeTruthy()
    expect(universidadActualizada?.id).toBe(universidadCreada.id)
    expect(universidadActualizada?.nombre).toBe(universidadCreada.nombre)
    expect(universidadActualizada?.sigla).toBe(nuevosDatosUniversidad.sigla)
})