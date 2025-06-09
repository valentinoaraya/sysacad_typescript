import { instanciaMateria as materia } from "../utils"

test("debería instanciar clase Materia y poder acceder a los atributos", () => {
    expect(materia).toBeTruthy()
    expect(materia.nombre).toBe("Desarrollo de Software")
    expect(materia.codigo).toBe("1234")
    expect(materia.observacion).toBe("Materia de programación")
})
