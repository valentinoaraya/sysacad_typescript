import { CargoService } from "../../src/services/CargoService";
import { crearInstanciaCargo } from "../utils";

test('deberia de crear una instancia de la clase Cargo y leer sus atributos', async () => {

    const instanciaCargo = await crearInstanciaCargo()
    const cargoCreado = await CargoService.crearCargo(instanciaCargo)

    expect(cargoCreado).toBeTruthy()
    expect(cargoCreado?.id).toBe(cargoCreado.id)
    expect(cargoCreado?.nombre).toBe(instanciaCargo.nombre)
    expect(cargoCreado.puntos).toBe(instanciaCargo.puntos)
    expect(cargoCreado.tipoDedicacion.nombre).toBe(instanciaCargo.tipoDedicacion.nombre)
    expect(cargoCreado.categoriaCargo.nombre).toBe(instanciaCargo.categoriaCargo.nombre)
});


