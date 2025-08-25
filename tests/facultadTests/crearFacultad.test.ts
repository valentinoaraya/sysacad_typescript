import { FacultadService } from "../../src/services/FacultadService"
import { crearInstanciaFacultad } from "../utils";

test('deberia crear una clase de autoridad y leer sus atributos', async () => {
    const facultad = await crearInstanciaFacultad();
    const facultadCreada = await FacultadService.crearFacultad(facultad);

    expect(facultadCreada).toBeTruthy();
    expect(facultadCreada?.nombre).toBe(facultad.nombre);
    expect(facultadCreada?.abreviatura).toBe(facultad.abreviatura);
    expect(facultadCreada?.directorio).toBe(facultad.directorio);
    expect(facultadCreada?.sigla).toBe(facultad.sigla);
    expect(facultadCreada?.codigoPostal).toBe(facultad.codigoPostal);
    expect(facultadCreada?.ciudad).toBe(facultad.ciudad);
    expect(facultadCreada?.domicilio).toBe(facultad.domicilio);
    expect(facultadCreada?.telefono).toBe(facultad.telefono);
    expect(facultadCreada?.contacto).toBe(facultad.contacto);
    expect(facultadCreada?.email).toBe(facultad.email);
})
