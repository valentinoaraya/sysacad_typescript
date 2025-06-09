import { instanciaTipoDedicacion as tipoDedicacion } from "../utils"

test('deberia de crear una instancia de la clase TIpoDedidacion y leer sus atributos', () => {

    expect(tipoDedicacion).toBeTruthy()
    expect(tipoDedicacion.nombre).toBe("Administrativo")
    expect(tipoDedicacion.observacion).toBe("Sin observación")
})

