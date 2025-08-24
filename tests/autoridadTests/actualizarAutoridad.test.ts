import { AutoridadService } from "../../src/services/AutoridadService";
import { crearInstanciaAutoridad } from "../utils";

test("deberia crear una clase de especialidad y luego actualizar su campo nombre", async () => {

    const autoridad = await crearInstanciaAutoridad()
    const autoridadCreada = await AutoridadService.crearAutoridad(autoridad)
    const nuevosDatosAutoridad = {
        nombre: "Ciencias Sociales"
    }

    const autoridadActualizada = await AutoridadService.actualizarAutoridad(autoridadCreada.id as number, nuevosDatosAutoridad)

    expect(autoridadActualizada).toBeTruthy()
    expect(autoridadActualizada?.id).toBe(autoridadCreada.id)
    expect(autoridadActualizada?.nombre).toBe(nuevosDatosAutoridad.nombre)
    expect(autoridadActualizada?.apellido).toBe(autoridadCreada.apellido)
    expect(autoridadActualizada?.telefono).toBe(autoridadCreada.telefono)
    expect(autoridadActualizada?.email).toBe(autoridadCreada.email)
    expect(autoridadActualizada?.cargo.nombre).toBe(autoridadCreada.cargo.nombre)
})
