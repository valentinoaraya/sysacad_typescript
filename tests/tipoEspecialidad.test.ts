import { TipoEspecialidad } from "../src/models/TipoEspecialidad"

test("debería instanciar la clase TipoEspecialidad y leer sus atributos", () =>{

    const tipoEspecialidad = new TipoEspecialidad(
        "Seguridad",
        "uno"
    )

    expect(tipoEspecialidad).toBeTruthy()
    expect(tipoEspecialidad.nombre).toBe("Seguridad")
    expect(tipoEspecialidad.nivel).toBe("uno")
})