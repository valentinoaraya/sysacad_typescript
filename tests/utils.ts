import { Alumno } from "../src/models/Alumno";
import { Autoridad } from "../src/models/Autoridad";
import { Cargo } from "../src/models/Cargo";
import { CategoriaCargo } from "../src/models/CategoriaCargo";
import { Departamento } from "../src/models/Departamento";
import { Especialidad } from "../src/models/Especialidad";
import { Facultad } from "../src/models/Facultad";
import { Grado } from "../src/models/Grado";
import { Materia } from "../src/models/Materia";
import { Orientacion } from "../src/models/Orientacion";
import { Plan } from "../src/models/Plan";
import { TipoDedicacion } from "../src/models/TipoDedicacion";
import { TipoEspecialidad } from "../src/models/TipoEspecialidad";
import { Universidad } from "../src/models/Universidad";
import { EspecialidadService } from "../src/services/EspecialidadService";
import { MateriaService } from "../src/services/MateriaService";
import { PlanService } from "../src/services/PlanService";
import { CargoService } from "../src/services/CargoService";
import { CategoriaCargoService } from "../src/services/CategoriaCargoService";
import { TipoDedicacionService } from "../src/services/TipoDedicacionService";

const fecha = new Date("2023-03-11")

export const instanciaCategoriaCargo = new CategoriaCargo(
    "media"
)

export const instanciaTipoDedicacion = new TipoDedicacion(
    "Administrativo",
    "Sin observación"
)

export const instanciaAlumno = new Alumno(
    "Araya",
    "Valentino",
    "45361303",
    "DNI",
    "2004-07-14",
    "M",
    9938,
    fecha
)

export const instanciaDepartamento = new Departamento(
    "Departamento 1"
)

export const instanciaEspecialidad = new Especialidad(
    "Ingeniería en Sistemas",
    "A",
    "Existe la ingeniería"
)

export const instanciaFacultad = new Facultad(
    "Facultad Regional de San Rafael",
    "FRSR",
    "Facultad de ingeniería",
    "FRSR",
    "5600",
    "San Rafael",
    "Urquiza 314",
    "02604421078",
    "Ing. Roberto D. Vilches",
    "rvilches@frsr.utn.edu.ar"
)

export const instanciaGrado = new Grado(
    "Primer grado"
)

export const instanciaMateria = new Materia(
    "Desarrollo de Software",
    "1234",
    "Materia de programación"
)

export const instanciaPlan = new Plan(
    "2025",
    "10-10-2020",
    "11-11-2025",
    "Funcional",
)

export const instanciaUniversidad = new Universidad(
    "Universidad Tecnológica Nacional",
    "UTN"
)

export const instanciaTipoEspecialidad = new TipoEspecialidad(
    "Seguridad",
    "Correcta"
)

export const crearInstanciaOrientacion = async () => {
    const especialidadPersistida = await EspecialidadService.crearEspecialidad(instanciaEspecialidad)

    const planPersistido = await PlanService.crearPlan(instanciaPlan)

    const materiaPersistida = await MateriaService.crearMateria(instanciaMateria)

    return new Orientacion("Ingeniería", especialidadPersistida, planPersistido, materiaPersistida)
}

export const crearInstanciaCargo = async () => {
    const categoriaCargoPersistida = await CategoriaCargoService.crearCategoriaCargo(instanciaCategoriaCargo)
    const tipoDedicacionPersistida = await TipoDedicacionService.crearTipoDedicacion(instanciaTipoDedicacion)
    return new Cargo(
        "Secretario Académico",
        281,
        categoriaCargoPersistida,
        tipoDedicacionPersistida
    )


}

export const crearInstanciaAutoridad = async () => {
    const cargo = await crearInstanciaCargo()
    const cargoPersistido = await CargoService.crearCargo(cargo);

    return new Autoridad(
        "Araya",
        "Valentino",
        cargoPersistido,
        "2604204836",
        "valentinoaraya04@gmail.com"
    )

}
