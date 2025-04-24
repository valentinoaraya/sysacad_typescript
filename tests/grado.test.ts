import {Grado} from "../src/models/Grado";

test("deberia crear una instacia de la clase Grado y leer sus atributos", () => {
    const grado = new Grado(
        "primer grado"
    );
    
    expect(grado.nombre).toBe("primer grado");

});



