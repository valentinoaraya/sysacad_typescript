import { CategoriaCargoService } from "../../src/services/CategoriaCargoService";
import { instanciaCategoriaCargo as categoriaCargo } from "../utils";

test("deberia crear una clase de especialidad y luego eliminar su campo nombre", async () => {

    const categoriaCargoCreada = await CategoriaCargoService.crearCategoriaCargo(categoriaCargo)
    await CategoriaCargoService.eliminarCategoriaCargo(categoriaCargoCreada.id as number)

    const categoriaCargoBorrada = await globalThis.prisma.categoriasCargo.findUnique({
        where: { id: categoriaCargoCreada.id }
    })

    expect(categoriaCargoBorrada).toBeFalsy()

})
