import { OrientacionService } from "../src/services/OrientacionService";
import { instanciaOrientacion as orientacion } from "./utils";

test("Deberia crear una clase Orientacion y luego actualizar su campo nombre", async () => {

    const orientacionCreada = await OrientacionService.crearOrientacion(orientacion)

    const nuevosDatosOrientacion = {
        nombre: "Ing"
    }
    const orientacionActualizada = await OrientacionService.actualizarOrientacion(orientacionCreada.id as number, nuevosDatosOrientacion)

    expect(orientacionActualizada).toBeTruthy()
    expect(orientacionActualizada.id).toBe(orientacionCreada.id)
    expect(orientacionActualizada.nombre).toBe(nuevosDatosOrientacion.nombre)
    expect(orientacionActualizada.especialidad).toBe(orientacionCreada.especialidad)
    expect(orientacionActualizada.plan).toBe(orientacionCreada.plan)
    expect(orientacionActualizada.materia).toBe(orientacionCreada.materia)
})