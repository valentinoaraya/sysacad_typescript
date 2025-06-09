import { CargoService } from "../../src/services/CargoService";
import { crearInstanciaCargo } from "../utils";

test("deberia crear una clase de autoridad y leer sus atributos", async () => {

    const cargo = await crearInstanciaCargo()
    const cargoCreado = await CargoService.crearCargo(cargo)

    expect(cargoCreado).toBeTruthy()
    expect(cargoCreado?.id).toBe(cargoCreado.id)
    expect(cargoCreado?.nombre).toBe(cargo.nombre)
    expect(cargoCreado?.puntos).toBe(cargo.puntos)
    expect(cargoCreado?.categoriaCargo.nombre).toBe(cargo.categoriaCargo.nombre)
    expect(cargoCreado?.tipoDedicacion.nombre).toBe(cargo.tipoDedicacion.nombre)
})
