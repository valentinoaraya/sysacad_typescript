import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

const prisma = new PrismaClient()

globalThis.prisma = prisma

beforeEach(async () => {
    await prisma.autoridades.deleteMany({});
    await prisma.cargos.deleteMany({});
    await prisma.alumnos.deleteMany({});
    await prisma.orientaciones.deleteMany({});
    await prisma.tiposDedicaciones.deleteMany({});
    await prisma.categoriasCargo.deleteMany({});
    await prisma.facultades.deleteMany({});
    await prisma.especialidades.deleteMany({});
    await prisma.planes.deleteMany({});
    await prisma.materias.deleteMany({});
    await prisma.universidades.deleteMany();
    await prisma.grados.deleteMany({});
    await prisma.grupos.deleteMany({});
    await prisma.areas.deleteMany({});
    await prisma.departamentos.deleteMany({});
    await prisma.usuarios.deleteMany({});
})

afterAll(async () => {
    await prisma.$disconnect();
});