import { MateriaService } from "../../src/services/MateriaService"
import { instanciaMateria as materia } from "../utils";

test("Deberia crear y guardar una materia en la base de datos", async () => {
    const materiaCreada = await MateriaService.crearMateria(materia);
    const materiaBD = await globalThis.prisma.materias.findUnique({
        where: { id: materiaCreada.id },
    });

    expect(materiaBD).toBeTruthy();
    expect(materiaBD?.nombre).toBe(materia.nombre);
    expect(materiaBD?.codigo).toBe(materia.codigo);
    expect(materiaBD?.observacion).toBe(materia.observacion);
})
