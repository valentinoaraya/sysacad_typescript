import { Facultad } from "../src/models/Facultad"

test("debería crear instancia de la clase facultad y leer sus atributos", () => {
    const facultad = new Facultad(
        "Facultad Regional de San Rafael",
        "FRSR",
        "Facultad de Ingeniería",
        "FRSR",
        "5600",
        "San Rafael",
        "Urquiza 314",
        "02604421078",
        "Ing. Roberto D. Vilches",
        "rvilches@frsr.utn.edu.ar",
    )

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