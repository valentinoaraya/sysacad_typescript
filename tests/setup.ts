import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

const prisma = new PrismaClient()

globalThis.prisma = prisma

beforeEach(async () => {
    await prisma.universidades.deleteMany();
})

afterAll(async () => {
    await prisma.$disconnect();
});