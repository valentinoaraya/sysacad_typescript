import { TipoDedicacionService } from "../../src/services/TipoDedicacionService";
import { instanciaTipoDedicacion as tipoDedicacion } from "../utils";

test("Deberia eliminar un plan por el ID en la base de datos", async () => {
    const tipoDedicacionDB = await TipoDedicacionService.crearTipoDedicacion(tipoDedicacion);

    await TipoDedicacionService.eliminarTipoDedicacion(tipoDedicacionDB.id as number);
    const planBorrado = await globalThis.prisma.planes.findUnique({
        where: { id: tipoDedicacionDB.id as number },
    });

    expect(planBorrado).toBeFalsy();
})
