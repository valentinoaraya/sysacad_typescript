import { OrientacionService } from "../../src/services/OrientacionService";
import { crearInstanciaOrientacion } from "../utils";

test("Deberia crear una clase Orientacion y luego actualizar su campo nombre", async () => {

    const orientacion = await crearInstanciaOrientacion()
    const orientacionCreada = await OrientacionService.crearOrientacion(orientacion)

    const nuevosDatosOrientacion = {
        nombre: "Ciencias Sociales"
    }

    const orientacionActualizada = await OrientacionService.actualizarOrientacion(orientacionCreada.id as number, nuevosDatosOrientacion)

    expect(orientacionActualizada).toBeTruthy()
    expect(orientacionActualizada?.id).toBe(orientacionCreada.id)
    expect(orientacionActualizada?.nombre).toBe(nuevosDatosOrientacion.nombre)
    expect(orientacionActualizada?.especialidad.id).toBe(orientacionCreada.especialidad.id)
    expect(orientacionActualizada?.plan.id).toBe(orientacionCreada.plan.id)
    expect(orientacionActualizada?.materia.id).toBe(orientacionCreada.materia.id)
})
