import { TipoDedicacion } from "../src/models/TipoDedicacion";

test('deberia de crear una instancia de la clase TIpoDedidacion y leer sus atributos', () => {
    const tipodedicacion = new TipoDedicacion(
        "Seguridad",
        "correcta"
    )

    expect(tipodedicacion).toBeTruthy()
    expect(tipodedicacion.nombre).toBe("Seguridad")
    expect(tipodedicacion.observacion).toBe("correcta")
})

