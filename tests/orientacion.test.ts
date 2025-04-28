import { Orientacion } from "../src/models/Orientacion";
import { Especialidad } from "../src/models/Especialidad";
import { Plan } from "../src/models/Plan";
import { Materia } from "../src/models/Materia";

test('deberia de crear una instancia de la clase Orientacion y leer sus atributos', () => {
    
    const nombre = "Ingenieria";
    const especialidad = new Especialidad("Ingenieria", "A", "OBSERVANDO");
    const plan = new Plan("2025", "10/10/2020", "11/11/2025", "funcional");
    const materia = new Materia( "Desarrollo de software", "1234", "Materia de programación");

    const orientacion = new Orientacion(nombre, especialidad, plan, materia);

    expect(orientacion).toBeTruthy();
    expect(orientacion.nombre).toBe("Ingenieria");
    expect(orientacion.especialidad).toBe(especialidad);
    expect(orientacion.plan).toBe(plan);
    expect(orientacion.materia).toBe(materia);
    
    });