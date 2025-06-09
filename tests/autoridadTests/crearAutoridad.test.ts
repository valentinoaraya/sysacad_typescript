import { AutoridadService } from "../../src/services/AutoridadService";
import { crearInstanciaAutoridad } from "../utils";

test("deberia crear una clase de autoridad y leer sus atributos", async () => {

    const autoridad = await crearInstanciaAutoridad()
    const autoridadCreada = await AutoridadService.crearAutoridad(autoridad)

    expect(autoridadCreada).toBeTruthy()
    expect(autoridadCreada?.id).toBe(autoridadCreada.id)
    expect(autoridadCreada?.nombre).toBe(autoridad.nombre)
    expect(autoridadCreada?.apellido).toBe(autoridad.apellido)
    expect(autoridadCreada?.telefono).toBe(autoridad.telefono)
    expect(autoridadCreada?.email).toBe(autoridad.email)
    expect(autoridadCreada.cargo.nombre).toBe(autoridad.cargo.nombre)
})
