import { CargoService } from "../../src/services/CargoService";
import { crearInstanciaCargo } from "../utils";

test("deberia crear una clase de especialidad y luego eliminar su campo nombre", async () => {

    const cargo = await crearInstanciaCargo()
    const cargoCreado = await CargoService.crearCargo(cargo)
    await CargoService.eliminarCargo(cargoCreado.id as number)

    const cargoBorrado = await globalThis.prisma.orientaciones.findUnique({
        where: { id: cargoCreado.id }
    })

    expect(cargoBorrado).toBeFalsy()

})
