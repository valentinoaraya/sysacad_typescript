import { OrientacionService } from "../../src/services/OrientacionService";
import { crearInstanciaOrientacion } from "../utils";

test("Deberia crear y guardas una orientacion en la base de datos", async () => {

    const orientacion = await crearInstanciaOrientacion()

    const orientacionCreada = await OrientacionService.crearOrientacion(orientacion);

    const orientacionBD = await OrientacionService.obtenerOrientacionPorId(orientacionCreada.id as number)

    expect(orientacionBD).toBeTruthy();
    expect(orientacionBD?.nombre).toBe(orientacion.nombre);
    expect(orientacionBD?.especialidad.id).toBe(orientacion.especialidad.id);
    expect(orientacionBD?.plan.id).toBe(orientacion.plan.id);
    expect(orientacionBD?.materia.id).toBe(orientacion.materia.id);
});
