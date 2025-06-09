import { crearInstanciaOrientacion, instanciaPlan, instanciaEspecialidad, instanciaMateria } from "../utils";

test('deberia de crear una instancia de la clase Orientacion y leer sus atributos', async () => {

    const orientacion = await crearInstanciaOrientacion()

    expect(orientacion).toBeTruthy();
    expect(orientacion.nombre).toBe("Ingeniería");
    expect(orientacion.especialidad.nombre).toBe(instanciaEspecialidad.nombre);
    expect(orientacion.plan.nombre).toBe(instanciaPlan.nombre);
    expect(orientacion.materia.nombre).toBe(instanciaMateria.nombre);

});
