import { CategoriaCargo } from "../src/models/CategoriaCargo";

test('deberia de crear una instancia de la clase CategoriaCargo y leer sus atributos', () => {
    const categoriaCargo = new CategoriaCargo(
        "categoria"
    );

    expect(categoriaCargo).toBeTruthy();
    expect(categoriaCargo.nombre).toBe("categoria");

})