import { instanciaTipoEspecialidad as tipoEspecialidad } from "../utils"

test("debería instanciar la clase TipoEspecialidad y leer sus atributos", () => {

    expect(tipoEspecialidad).toBeTruthy()
    expect(tipoEspecialidad.nombre).toBe("Seguridad")
    expect(tipoEspecialidad.nivel).toBe("Correcta")
})
