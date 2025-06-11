import { GrupoService } from "../../src/services/GrupoService";
import { instanciaGrupo as grupo } from "../utils";

test('deberia crear y gurdar un grupo en la base de datos', async () => {

    const grupoCreado = await GrupoService.crearGrupo(grupo);

    const grupoDB = await globalThis.prisma.grupos.findUnique({
        where: { id: grupoCreado.id },
    })

    expect(grupoDB).toBeTruthy()
    expect(grupoDB?.nombre).toBe(grupo.nombre)
})

