import { instanciaEspecialidad as especialidad } from "../utils"

test('deberia de crear una instancia de la clase Especialidad y leer sus atributos', () => {

    expect(especialidad).toBeTruthy()
    expect(especialidad.nombre).toBe("Ingeniería en Sistemas")
    expect(especialidad.letra).toBe("A")
    expect(especialidad.observacion).toBe("Existe la ingeniería")
})
