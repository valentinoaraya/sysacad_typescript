import { instanciaGrado as grado } from "../utils";

test("deberia crear una instacia de la clase Grado y leer sus atributos", () => {
    expect(grado.nombre).toBe("Primer grado");
});



