import { FacultadService } from "../../src/services/FacultadService";
import { instanciaFacultad } from "../utils";
test("deberia crear una clase de autoridad y leer sus atributos", async () => {

    const facultad = await FacultadService.crearFacultad(instanciaFacultad)
    const nuevosDatosFacultad = {
        nombre: "Facultad Regional de Jujuy",
    }
    const facultadActualizada = await FacultadService.actualizarFacultad(facultad.id as number, nuevosDatosFacultad)

    expect(facultad).toBeTruthy()
    expect(facultadActualizada.nombre).toBe(nuevosDatosFacultad.nombre)
    expect(facultadActualizada.abreviatura).toBe("FRSR")
    expect(facultadActualizada.directorio).toBe("Facultad de ingeniería")
    expect(facultadActualizada.sigla).toBe("FRSR")
    expect(facultadActualizada.ciudad).toBe("San Rafael")
    expect(facultadActualizada.codigoPostal).toBe("5600")
    expect(facultadActualizada.telefono).toBe("02604421078")
    expect(facultadActualizada.domicilio).toBe("Urquiza 314")
    expect(facultadActualizada.email).toBe("rvilches@frsr.utn.edu.ar")
    expect(facultadActualizada.contacto).toBe("Ing. Roberto D. Vilches")

})
