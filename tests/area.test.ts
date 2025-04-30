import {Area} from "../src/models/Area";

test("deberia crear una instacia de la clase Area y leer sus atributos", () => {
    const area = new Area(
        "primer area"
    );
    
    expect(area.nombre).toBe("primer area");

});