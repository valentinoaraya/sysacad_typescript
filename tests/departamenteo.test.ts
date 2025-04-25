import { Departamento } from "../src/models/Departamento"

test("debería instanciar la clase departamento y leer sus atributos", () => {
    const departamento = new Departamento(
        "Departamento 1"
    )

    expect(departamento).toBeTruthy()
    expect(departamento.nombre).toBe("Departamento 1")
})