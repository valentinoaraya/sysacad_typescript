import { TipoDedicacionService } from "../../src/services/TipoDedicacionService";
import { instanciaTipoDedicacion as tipoDedicacion } from "../utils";

test("Deberia crear y guardar un TipoDedicacion en la base de datos", async () => {
    const tipoDedicacionCreada = await TipoDedicacionService.crearTipoDedicacion(tipoDedicacion);
    const tipoDedicacionDB = await globalThis.prisma.tiposDedicaciones.findUnique({
        where: { id: tipoDedicacionCreada.id },
    });

    expect(tipoDedicacionDB).toBeTruthy()
    expect(tipoDedicacionDB?.nombre).toBe(tipoDedicacion.nombre)
    expect(tipoDedicacionDB?.observacion).toBe(tipoDedicacion.observacion)
})
