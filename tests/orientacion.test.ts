import { instanciaOrientacion as orientacion } from "./utils";

test('deberia de crear una instancia de la clase Orientacion y leer sus atributos', () => {
    expect(orientacion).toBeTruthy();
    expect(orientacion.nombre).toBe("Ingeniería");

    // TODO: Terminar de implementar estos tests

    //expect(orientacion.especialidad).toBe(especialidad);
    //expect(orientacion.plan).toBe(plan);
    //expect(orientacion.materia).toBe(materia);

});