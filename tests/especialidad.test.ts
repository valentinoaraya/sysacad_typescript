import { Especialidad  } from "../src/models/Especialidad";

test('deberia de crear una instancia de la clase Especialidad y leer sus atributos', () => {
    const especialidad = new Especialidad(
        "Ingenieria en sistemas", 
        "A",
        "Existe la ingenieria"
    );

    expect(especialidad).toBeTruthy()
    expect(especialidad.nombre).toBe("Ingenieria en sistemas")
    expect(especialidad.letra).toBe("A")
    expect(especialidad.observacion).toBe("Existe la ingenieria")
})