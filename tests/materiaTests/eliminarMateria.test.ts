import { MateriaService } from "../../src/services/MateriaService"
import { instanciaMateria as materia } from "../utils";

test("Deberia eliminar una materia por el ID en la base de datos", async () => {
    const materiaBD = await MateriaService.crearMateria(materia);

    await MateriaService.eliminarMateria(materiaBD.id as number);
    const materiaBorrada = await globalThis.prisma.materias.findUnique({
        where: { id: materiaBD.id as number },
    });

    expect(materiaBorrada).toBeFalsy();
})
