import {Universidad} from "../src/models/Universidad";

test("deberia crear una instacia de la clase universidad y leer sus atributos",()=>{
    const universidad = new Universidad({
        nombre:"Universidad Tecnologica Nacional",
        sigla:"UTN"
    });

    expect(universidad.nombre).toBe("Universidad Tecnologica Nacional")
    expect(universidad.sigla).toBe("UTN")
})
