import { Universidad } from "../src/models/Universidad";

test("deberia crear una instacia de la clase universidad y leer sus atributos", () => {
    const universidad = new Universidad(
        "Universidad Tecnologica Nacional",
        "UTN",
    );

    expect(universidad).toBeTruthy()
    expect(universidad.nombre).toBe("Universidad Tecnologica Nacional")
    expect(universidad.sigla).toBe("UTN")
})
