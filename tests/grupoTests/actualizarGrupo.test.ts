import { GrupoService } from "../../src/services/GrupoService"
import { instanciaGrupo as grupo } from "../utils"

test("debería crear un grupo en la base de datos y luego actualizar su campo sigla", async () => {

    const grupoCreado = await GrupoService.crearGrupo(grupo)

    const nuevosDatosGrupo = {
        nombre: "Primer grupo"
    }

    const grupoActualizado = await GrupoService.actualizarGrupo(grupoCreado.id as number, nuevosDatosGrupo)

    expect(grupoActualizado).toBeTruthy()
    expect(grupoActualizado?.id).toBe(grupoCreado.id)
    expect(grupoActualizado?.nombre).toBe(nuevosDatosGrupo.nombre)
})