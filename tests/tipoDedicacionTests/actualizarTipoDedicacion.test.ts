import { TipoDedicacionService } from "../../src/services/TipoDedicacionService";
import { instanciaTipoDedicacion as tipoDedicacion } from "../utils";

test("Deberia crear y guardar un TipoDedicacion en la base de datos", async () => {
    const tipoDedicacionCreada = await TipoDedicacionService.crearTipoDedicacion(tipoDedicacion);

    const nuevosDatosTipoDedicacion = {
        nombre: "Secretario",
        observacion: "Buen trabajo"
    }

    const tipoDedicacionActualizada = await TipoDedicacionService.actualizarTipoDedicacion(tipoDedicacionCreada.id as number, nuevosDatosTipoDedicacion)

    expect(tipoDedicacionActualizada).toBeTruthy()
    expect(tipoDedicacionActualizada?.nombre).toBe(nuevosDatosTipoDedicacion.nombre)
    expect(tipoDedicacionActualizada?.observacion).toBe(nuevosDatosTipoDedicacion.observacion)
})