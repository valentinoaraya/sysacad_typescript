import { CargoService } from "../../src/services/CargoService";
import { crearInstanciaCargo } from "../utils";

test("deberia crear una clase de especialidad y luego actualizar su campo nombre", async () => {

    const cargo = await crearInstanciaCargo()
    const cargoCreado = await CargoService.crearCargo(cargo)
    const nuevosDatosCargo = {
        nombre: "Profesor",
        puntos: 100
    }

    const cargoActualizado = await CargoService.actualizarCargo(cargoCreado.id as number, nuevosDatosCargo)

    expect(cargoActualizado).toBeTruthy()
    expect(cargoActualizado?.id).toBe(cargoCreado.id)
    expect(cargoActualizado?.nombre).toBe(nuevosDatosCargo.nombre)
    expect(cargoActualizado?.puntos).toBe(nuevosDatosCargo.puntos)
    expect(cargoActualizado?.categoriaCargo.nombre).toBe(cargoCreado.categoriaCargo.nombre)
    expect(cargoActualizado?.tipoDedicacion.nombre).toBe(cargoCreado.tipoDedicacion.nombre)
})
