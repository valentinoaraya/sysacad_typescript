import { AreaService } from "../../src/services/AreaService"
import { instanciaArea as Area } from "../utils"

test("debería crear un grupo en la base de datos y luego actualizar su campo sigla", async () => {

    const areaCreado = await AreaService.crearArea(Area)

    const nuevosDatosArea = {
        nombre: "Primer area"
    }

    const areaActualizado = await AreaService.actualizarArea(areaCreado.id as number, nuevosDatosArea)

    expect(areaActualizado).toBeTruthy()
    expect(areaActualizado?.id).toBe(areaCreado.id)
    expect(areaActualizado?.nombre).toBe(nuevosDatosArea.nombre)
})