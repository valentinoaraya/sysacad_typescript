import { instanciaCategoriaCargo as categoriaCargo } from "../utils";

test('deberia de crear una instancia de la clase CategoriaCargo y leer sus atributos', () => {

    expect(categoriaCargo).toBeTruthy();
    expect(categoriaCargo.nombre).toBe("media");

})
