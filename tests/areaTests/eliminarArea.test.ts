import { AreaService } from "../../src/services/AreaService";
import { instanciaArea as area } from "../utils";

test('debería eliminar un área por ID de la base de datos', async () => {
    const areaDB = await AreaService.crearArea(area);

    await AreaService.eliminarArea(areaDB.id as number);

    const areaBorrada = await globalThis.prisma.areas.findUnique({
        where: { id: areaDB.id }
    });

    expect(areaBorrada).toBeFalsy();
});
