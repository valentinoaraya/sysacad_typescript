import { PrismaClient } from "@prisma/client";
import { limpiarBaseDeDatos } from "./limpiarDB";
import { encodeId } from "./hashids";

const prisma = new PrismaClient();

async function main() {

    await limpiarBaseDeDatos()

    const universidad = await prisma.universidades.create({
        data: {
            nombre: "Universidad Tecnológica Nacional",
            sigla: "UTN"
        }
    });

    const facultad = await prisma.facultades.create({
        data: {
            nombre: "Facultad Regional Mendoza",
            abreviatura: "FRM",
            directorio: "Directorio Facultad",
            sigla: "FRM",
            codigoPostal: "5500",
            ciudad: "Mendoza",
            domicilio: "Rodriguez 273",
            telefono: "261-123456",
            contacto: "Secretaría Académica",
            email: "frm@utn.edu.ar",
            universidadId: universidad.id
        }
    });

    const especialidad = await prisma.especialidades.create({
        data: {
            nombre: "Ingeniería en Sistemas de Información",
            letra: "A",
            observacion: "Plan actualizado 2020"
        }
    });

    const plan = await prisma.planes.create({
        data: {
            nombre: "Plan 2020",
            fechaInicio: "2020-01-01",
            fechaFin: "2030-12-31",
            observacion: "Vigente"
        }
    });

    const materia1 = await prisma.materias.create({
        data: {
            nombre: "Algoritmos y Estructuras de Datos",
            codigo: "AED101",
            observacion: "Primer año"
        }
    });

    const materia2 = await prisma.materias.create({
        data: {
            nombre: "Paradigmas de Programación",
            codigo: "PP202",
            observacion: "Segundo año"
        }
    });

    await prisma.orientaciones.create({
        data: {
            nombre: "Orientación en Programación",
            especialidadId: especialidad.id,
            planId: plan.id,
            materiaId: materia1.id
        }
    });

    await prisma.orientaciones.create({
        data: {
            nombre: "Orientación en Sistemas Distribuidos",
            especialidadId: especialidad.id,
            planId: plan.id,
            materiaId: materia2.id
        }
    });

    const alumno = await prisma.alumnos.create({
        data: {
            nroLegajo: 2021001,
            apellido: "Araya",
            nombre: "Valentino",
            nroDocumento: "12345678",
            tipoDocumento: "DNI",
            fechaNacimiento: "2002-05-10",
            sexo: "M",
            fechaIngreso: new Date("2021-03-01"),
            facultadId: facultad.id,
            especialidadId: especialidad.id
        }
    });

    console.log("✅ Datos insertados correctamente");
    console.log("El id del alumno es: ", encodeId(alumno.id))
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });