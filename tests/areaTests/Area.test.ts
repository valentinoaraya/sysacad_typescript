import { instanciaArea as area } from "../utils";

test("deberia crear una instacia de la clase Grupo y leer sus atributos", () => {
    expect(area.nombre).toBe("Primer Area");
});
