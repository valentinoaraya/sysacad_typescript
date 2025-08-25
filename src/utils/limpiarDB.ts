import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function limpiarBaseDeDatos() {
    try {
        console.log('Iniciando limpieza de la base de datos...');

        await prisma.autoridades.deleteMany({});
        console.log('Tabla Autoridades limpiada');

        await prisma.cargos.deleteMany({});
        console.log('Tabla Cargos limpiada');

        await prisma.alumnos.deleteMany({});
        console.log('Tabla Alumnos limpiada');

        await prisma.orientaciones.deleteMany({});
        console.log('Tabla Orientaciones limpiada');

        await prisma.tiposDedicaciones.deleteMany({});
        console.log('Tabla TiposDedicaciones limpiada');

        await prisma.categoriasCargo.deleteMany({});
        console.log('Tabla CategoriasCargo limpiada');

        await prisma.facultades.deleteMany({});
        console.log('Tabla Facultades limpiada');

        await prisma.especialidades.deleteMany({});
        console.log('Tabla Especialidades limpiada');

        await prisma.planes.deleteMany({});
        console.log('Tabla Planes limpiada');

        await prisma.materias.deleteMany({});
        console.log('Tabla Materias limpiada');

        await prisma.universidades.deleteMany();
        console.log('Tabla Universidades limpiada');

        await prisma.grados.deleteMany({});
        console.log('Tabla Grados limpiada');

        await prisma.grupos.deleteMany({});
        console.log('Tabla Grupos limpiada');

        await prisma.areas.deleteMany({});
        console.log('Tabla Areas limpiada');

        await prisma.departamentos.deleteMany({});
        console.log('Tabla Departamentos limpiada');

        await prisma.usuarios.deleteMany({});
        console.log('Tabla Usuarios limpiada');

        console.log('Limpieza de la base de datos completada exitosamente');
        console.log(' ')
    } catch (error) {
        console.error('Error al limpiar la base de datos:', error);
        throw error;
    }
}

limpiarBaseDeDatos()
