import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

const prisma = new PrismaClient()

globalThis.prisma = prisma

beforeEach(async () => {
    await prisma.orientaciones.deleteMany({});
    await prisma.usuarios.deleteMany({});
    await prisma.alumnos.deleteMany({})
    await prisma.universidades.deleteMany();
    await prisma.especialidades.deleteMany({});
    await prisma.planes.deleteMany({});
    await prisma.materias.deleteMany({});
})

afterAll(async () => {
    await prisma.$disconnect();
});