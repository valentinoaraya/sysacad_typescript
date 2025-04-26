import { Plan } from "../src/models/Plan";

test('Deberia crear una instancia de la clase Plan y llamar a sus atributos', () =>{

    const plan = new Plan(
        "2025",
        "10/10/2020",
        "11/11/2025",
        "funcional"
    )

    expect(plan).toBeTruthy()
    expect(plan.nombre).toBe("2025")
    expect(plan.fechaInicio).toBe("10/10/2020")
    expect(plan.fechaFin).toBe("11/11/2025")
    expect(plan.observacion).toBe("funcional")
})