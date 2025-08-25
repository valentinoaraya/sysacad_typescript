import { GradoService } from "../../src/services/GradoService"
import { instanciaGrado as grado } from "../utils"

test("debería crear un grado en la base de datos y luego actualizar su campo sigla", async () => {

    const gradoCreado = await GradoService.crearGrado(grado)

    const nuevosDatosGrado = {
        nombre: "Primer grado"
    }

    const gradoActualizado = await GradoService.actualizarGrado(gradoCreado.id as number, nuevosDatosGrado)

    expect(gradoActualizado).toBeTruthy()
    expect(gradoActualizado?.id).toBe(gradoCreado.id)
    expect(gradoActualizado?.nombre).toBe(nuevosDatosGrado.nombre)
})