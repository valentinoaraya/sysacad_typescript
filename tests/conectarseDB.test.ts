test("debería conectarse a la base de datos sin errores", async () => {
    try {
        await globalThis.prisma.$connect();
        expect(true).toBe(true);

    } catch (error) {
        throw new Error(`Error de conexión: ${error}`);

    } finally {
        await globalThis.prisma.$disconnect();
    }
})