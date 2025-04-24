import { Cargo } from "../src/models/Cargo";
import { CategoriaCargo } from "../src/models/CategoriaCargo";
import { TipoDedicacion } from "../src/models/TipoDedicacion";

test('deberia de crear una instancia de la clase Cargo y leer sus atributos', () => {
    
    const categoria = new CategoriaCargo("media");
    const dedicacion = new TipoDedicacion("administrativo","sin observacion");
    const cargo = new Cargo("secretario academico",281,categoria,dedicacion)

    expect(cargo).toBeTruthy();
    expect(cargo.nombre).toBe("secretario academico");
    expect(cargo.puntos).toBe(281);
    expect(cargo.categoriaCargo).toBe(categoria);
    expect(cargo.tipoDedicacion).toBe(dedicacion);
    
    });


