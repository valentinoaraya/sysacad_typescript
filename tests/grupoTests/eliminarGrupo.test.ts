import { GrupoService } from "../../src/services/GrupoService";
import { instanciaGrupo as grupo } from "../utils";

test('deberia eliminar un grupo por ID de la base de datos', async () => {
    const grupoDB = await GrupoService.crearGrupo(grupo);

    await GrupoService.eliminarGrupo(grupoDB.id as number);

    const grupoBorrado = await globalThis.prisma.grupos.findUnique({
        where: { id: grupoDB.id }
    });

    expect(grupoBorrado).toBeFalsy();
});

