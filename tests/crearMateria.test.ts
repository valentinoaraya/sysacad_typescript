import { MateriaService } from "../src/services/MateriaService"
import { crearMateriaEjemplo } from "../src/utils";

test("Deberia crear y guardar una materia en la base de datos", async ()=> {
    const materia = await crearMateriaEjemplo();
    const materiaCreada = await MateriaService.crearMateria(materia);
    const materiaBD = await globalThis.prisma.materia.findUnique({
        where : {id : materiaCreada.id},
    });

    expect(materiaBD).toBeTruthy();
    expect(materiaBD?.nombre).toBe(materia.nombre);
    expect(materiaBD?.codigo).toBe(materia.codigo);
    expect(materiaBD?.observacion).toBe(materia.observacion);
})