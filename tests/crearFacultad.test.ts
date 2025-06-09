import { FacultadService } from "../src/services/FacultadService";
import { instanciaFacultad } from "./utils";

test("deberia crear una clase de autoridad y leer sus atributos", async () => {

    const facultad = await FacultadService.crearFacultad(instanciaFacultad)

    expect(facultad).toBeTruthy()
    expect(facultad.nombre).toBe(instanciaFacultad.nombre)
    expect(facultad.abreviatura).toBe(instanciaFacultad.abreviatura)
    expect(facultad.directorio).toBe(instanciaFacultad.directorio)
    expect(facultad.sigla).toBe(instanciaFacultad.sigla)
    expect(facultad.ciudad).toBe(instanciaFacultad.ciudad)
    expect(facultad.codigoPostal).toBe(instanciaFacultad.codigoPostal)
    expect(facultad.telefono).toBe(instanciaFacultad.telefono)
    expect(facultad.domicilio).toBe(instanciaFacultad.domicilio)
    expect(facultad.email).toBe(instanciaFacultad.email)
    expect(facultad.contacto).toBe(instanciaFacultad.contacto)
});
