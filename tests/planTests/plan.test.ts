import { instanciaPlan as plan } from "../utils";

test('Deberia crear una instancia de la clase Plan y llamar a sus atributos', () => {
    expect(plan).toBeTruthy()
    expect(plan.nombre).toBe("2025")
    expect(plan.fechaInicio).toBe("10-10-2020")
    expect(plan.fechaFin).toBe("11-11-2025")
    expect(plan.observacion).toBe("Funcional")
})
