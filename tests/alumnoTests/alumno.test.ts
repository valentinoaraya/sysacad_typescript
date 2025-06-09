import { instanciaAlumno as alumno } from "../utils"

test("debería crear instancia de la clase alumno y leer sus atributos", () => {

    const fechaIngreso = new Date("2023-03-11")

    expect(alumno).toBeTruthy()
    expect(alumno.nombre).toBe("Valentino")
    expect(alumno.apellido).toBe("Araya")
    expect(alumno.nroDocumento).toBe("45361303")
    expect(alumno.tipoDocumento).toBe("DNI")
    expect(alumno.fechaNacimiento).toBe("2004-07-14")
    expect(alumno.sexo).toBe("M")
    expect(alumno.nroLegajo).toBe(9938)
    expect(alumno.fechaIngreso).toStrictEqual(fechaIngreso)
})
