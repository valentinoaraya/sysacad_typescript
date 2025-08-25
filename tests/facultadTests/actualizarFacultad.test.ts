import { FacultadService } from "../../src/services/FacultadService"
import { crearInstanciaFacultad } from "../utils";

test('deberia crear una clase de autoridad y leer sus atributos', async () => {
    const facultad = await crearInstanciaFacultad();
    const facultadCreada = await FacultadService.crearFacultad(facultad);

    expect(facultadCreada).toBeTruthy();
    expect(facultadCreada?.nombre).toBe(facultad.nombre);

    const facultadActualizada = await FacultadService.actualizarFacultad(facultadCreada!.id!, {
        nombre: "Facultad Regional de Mendoza"
    });

    expect(facultadActualizada).toBeTruthy();
    expect(facultadActualizada?.nombre).toBe("Facultad Regional de Mendoza");
})
