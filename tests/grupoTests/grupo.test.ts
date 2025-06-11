import { instanciaGrupo as grupo } from "../utils";

test("deberia crear una instacia de la clase Grupo y leer sus atributos", () => {
    expect(grupo.nombre).toBe("Primer Grupo");
});



