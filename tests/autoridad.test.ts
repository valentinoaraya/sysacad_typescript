import { Autoridad } from "../src/models/Autoridad";
import { Cargo } from "../src/models/Cargo";
import { CategoriaCargo } from "../src/models/CategoriaCargo";
import { TipoDedicacion } from "../src/models/TipoDedicacion";

test('Deberia de crear una instancia de la clase Autoridad y leer sus atributos',() => {
    
    const tipoDedicacion1 = new TipoDedicacion("Enseñar", "Observación")
    const categoriaCargo1 = new CategoriaCargo("Administración")
    const cargo1 = new Cargo("Secretario", 100, categoriaCargo1, tipoDedicacion1)

    const autoridad = new Autoridad(
        "Conforti",
        "Angelo",
        cargo1,
        "1234",
        "aaaa@"
    )

    expect(autoridad).toBeTruthy()
    expect(autoridad.apellido).toBe("Conforti")
    expect(autoridad.nombre).toBe("Angelo")
    expect(autoridad.cargo).toEqual(cargo1)
    expect(autoridad.telefono).toBe("1234")
    expect(autoridad.email).toBe("aaaa@")
})