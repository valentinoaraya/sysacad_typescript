import { Universidad } from "../src/models/Universidad"
import { UniversidadService } from "../src/services/UniversidadService"

test("debería crear una Universidad en la base de datos y luego actualizar su campo sigla", async () => {

    const universidad = new Universidad("Universidad Tecnológica Nacional", "UTN")

    const universidadCreada = await UniversidadService.crearUniversidad(universidad)

    const nuevosDatosUniversidad = {
        sigla: "UTN - FRSR"
    }

    const universidadActualizada = await UniversidadService.actualizarUniversidad(universidadCreada.id as number, nuevosDatosUniversidad)

    expect(universidadActualizada).toBeTruthy()
    expect(universidadActualizada.id).toBe(universidadCreada.id)
    expect(universidadActualizada.nombre).toBe(universidadCreada.nombre)
    expect(universidadActualizada.sigla).toBe(nuevosDatosUniversidad.sigla)
})