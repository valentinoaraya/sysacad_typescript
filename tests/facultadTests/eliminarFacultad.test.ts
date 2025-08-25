import { FacultadService } from "../../src/services/FacultadService"
import { crearInstanciaFacultad } from "../utils";

test('deberia eliminar una facultad', async () => {
    const facultad = await crearInstanciaFacultad();
    const facultadCreada = await FacultadService.crearFacultad(facultad);

    expect(facultadCreada).toBeTruthy();
    expect(facultadCreada?.id).toBeDefined();

    const facultadEliminada = await FacultadService.eliminarFacultad(facultadCreada!.id!);

    expect(facultadEliminada).toBeTruthy();
    expect(facultadEliminada?.id).toBe(facultadCreada!.id);
})
