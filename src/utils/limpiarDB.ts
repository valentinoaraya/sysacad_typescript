import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function limpiarBaseDeDatos() {
    try {
        console.log('Iniciando limpieza de la base de datos...');

        await prisma.orientaciones.deleteMany({});
        console.log('Tabla Orientaciones limpiada');

        await prisma.usuarios.deleteMany({});
        console.log('Tabla Usuarios limpiada');

        await prisma.alumnos.deleteMany({})
        console.log('Tabla Alumnos limpiada');

        await prisma.universidades.deleteMany({});
        console.log('Tabla Universidades limpiada');

        await prisma.especialidades.deleteMany({});
        console.log('Tabla Especialidades limpiada');

        await prisma.planes.deleteMany({});
        console.log('Tabla Planes limpiada');

        await prisma.materias.deleteMany({});
        console.log('Tabla Materias limpiada');

        console.log('Limpieza de la base de datos completada exitosamente');
        console.log(' ')
    } catch (error) {
        console.error('Error al limpiar la base de datos:', error);
        throw error;
    }
}

limpiarBaseDeDatos()
