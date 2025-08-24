import { CategoriaCargoService } from "../../src/services/CategoriaCargoService"
import { instanciaCategoriaCargo as categoriaCargo } from "../utils"

test("debería crear un grado en la base de datos y luego actualizar su campo sigla", async () => {

    const categoriaCargoCreada = await CategoriaCargoService.crearCategoriaCargo(categoriaCargo)

    const nuevosDatosCategoriaCargo = {
        nombre: "Alta"
    }

    const categoriaCargoActualizada = await CategoriaCargoService.actualizarCategoriaCargo(categoriaCargoCreada.id as number, nuevosDatosCategoriaCargo)

    expect(categoriaCargoActualizada).toBeTruthy()
    expect(categoriaCargoActualizada?.id).toBe(categoriaCargoCreada.id)
    expect(categoriaCargoActualizada?.nombre).toBe(nuevosDatosCategoriaCargo.nombre)
})