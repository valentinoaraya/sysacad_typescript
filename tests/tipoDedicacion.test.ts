import { instanciaTipoDedicacion as tipoDedicacion } from "./utils"

test('deberia de crear una instancia de la clase TIpoDedidacion y leer sus atributos', () => {

    expect(tipoDedicacion).toBeTruthy()
    expect(tipoDedicacion.nombre).toBe("Seguridad")
    expect(tipoDedicacion.observacion).toBe("correcta")
})

