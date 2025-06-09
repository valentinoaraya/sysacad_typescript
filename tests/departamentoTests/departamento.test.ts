import { instanciaDepartamento as departamento } from "../utils"

test("debería instanciar la clase departamento y leer sus atributos", () => {

    expect(departamento).toBeTruthy()
    expect(departamento.nombre).toBe("Departamento 1")
})