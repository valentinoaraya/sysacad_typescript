import { Materia } from "../src/models/Materia"

test("debería instanciar clase Materia y poder acceder a los atributos", () => {
    const materia = new Materia(
        "Desarrollo de software",
        "1234",
        "Materia de programación"
    )

    expect(materia).toBeTruthy()
    expect(materia.nombre).toBe("Desarrollo de software")
    expect(materia.codigo).toBe("1234")
    expect(materia.observacion).toBe("Materia de programación")
})