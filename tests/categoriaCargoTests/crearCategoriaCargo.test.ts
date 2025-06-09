import { CategoriaCargoService } from "../../src/services/CategoriaCargoService";
import { instanciaCategoriaCargo as categoriaCargo } from "../utils";

test("Deberia crear y guardad una especialidad en la base de datos", async () => {
    const categoriaCargoCreada = await CategoriaCargoService.crearCategoriaCargo(categoriaCargo);

    expect(categoriaCargoCreada).toBeTruthy();
    expect(categoriaCargoCreada?.nombre).toBe(categoriaCargo.nombre);
})
