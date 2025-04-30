import {Grupo} from "../src/models/Grupo";

test("deberia crear una instacia de la clase Grupo y leer sus atributos", () => {
    const grupo = new Grupo(
        "primer grupo"
    );
    
    expect(grupo.nombre).toBe("primer grupo");

});