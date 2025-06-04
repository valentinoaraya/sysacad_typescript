import { MateriaService } from "../src/services/MateriaService"

test("Deberia eliminar una materia por el ID en la base de datos", async () => {
    const materia = await crearMateriaEjemplo();
    const materiaBD = await MateriaService.crearMateria(materia);

    await MateriaService.eliminarMateria(materiaBD.id as number);
    const materiaBorrada = await globalThis.prisma.materias.findUnique({
        where: { id: materiaBD.id as number },
    });

    expect(materiaBorrada).toBeFalsy();
})