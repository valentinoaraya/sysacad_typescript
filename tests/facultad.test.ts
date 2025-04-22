import { Facultad } from "../src/models/Facultad"

test("debería crear instancia de la clase facultad y leer sus atributos", () => {
    const facultad = new Facultad({
        nombre: "Facultad Regional de San Rafael",
        abreviatura: "FRSR",
        directorio: "Facultad de Ingeniería",
        sigla: "FRSR",
        ciudad: "San Rafael",
        codigoPostal: "5600",
        telefono: "02604421078",
        domicilio: "Urquiza 314",
        email: "rvilches@frsr.utn.edu.ar",
        contacto: "Ing. Roberto D. Vilches"
    })

    expect(facultad.nombre).toBe("Facultad Regional de San Rafael")
    expect(facultad.abreviatura).toBe("FRSR")
    expect(facultad.directorio).toBe("Facultad de Ingeniería")
    expect(facultad.sigla).toBe("FRSR")
    expect(facultad.ciudad).toBe("San Rafael")
    expect(facultad.codigoPostal).toBe("5600")
    expect(facultad.telefono).toBe("02604421078")
    expect(facultad.domicilio).toBe("Urquiza 314")
    expect(facultad.email).toBe("rvilches@frsr.utn.edu.ar")
    expect(facultad.contacto).toBe("Ing. Roberto D. Vilches")
})