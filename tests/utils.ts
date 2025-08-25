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
import { Grupo } from "../src/models/Grupo";
import { EspecialidadService } from "../src/services/EspecialidadService";
import { MateriaService } from "../src/services/MateriaService";
import { PlanService } from "../src/services/PlanService";
import { CargoService } from "../src/services/CargoService";
import { CategoriaCargoService } from "../src/services/CategoriaCargoService";
import { TipoDedicacionService } from "../src/services/TipoDedicacionService";
import { Area } from "../src/models/Area";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fecha = new Date("2023-03-11")

export const instanciaCategoriaCargo = new CategoriaCargo(
    "media"
)

export const instanciaTipoDedicacion = new TipoDedicacion(
    "Administrativo",
    "Sin observación"
)

export const crearEntidadesPadre = async () => {
    const universidad = await prisma.universidades.create({
        data: {
            nombre: "Universidad Tecnológica Nacional",
            sigla: "UTN"
        }
    });

    const facultad = await prisma.facultades.create({
        data: {
            nombre: "Facultad Regional de San Rafael",
            abreviatura: "FRSR",
            directorio: "Facultad de ingeniería",
            sigla: "FRSR",
            codigoPostal: "5600",
            ciudad: "San Rafael",
            domicilio: "Urquiza 314",
            telefono: "02604421078",
            contacto: "Ing. Roberto D. Vilches",
            email: "rvilches@frsr.utn.edu.ar",
            universidadId: universidad.id
        }
    });

    const especialidad = await prisma.especialidades.create({
        data: {
            nombre: "Ingeniería en Sistemas",
            letra: "A",
            observacion: "Existe la ingeniería"
        }
    });

    return { universidad, facultad, especialidad };
};

export const crearInstanciaAlumno = async () => {
    const { facultad, especialidad } = await crearEntidadesPadre();
    return new Alumno(
        "Araya",
        "Valentino",
        "45361303",
        "DNI",
        "2004-07-14",
        "M",
        9938,
        fecha,
        facultad.id,
        especialidad.id
    );
};

export const crearInstanciaFacultad = async () => {
    const { universidad } = await crearEntidadesPadre();
    return new Facultad(
        "Facultad Regional de San Rafael",
        "FRSR",
        "Facultad de ingeniería",
        "FRSR",
        "5600",
        "San Rafael",
        "Urquiza 314",
        "02604421078",
        "Ing. Roberto D. Vilches",
        "rvilches@frsr.utn.edu.ar",
        universidad.id
    );
};

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

export const instanciaGrupo = new Grupo(
    "Primer Grupo"
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

export const instanciaArea = new Area(
    "Primer Area"
)
