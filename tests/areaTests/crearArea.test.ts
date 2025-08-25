import { AreaService } from "../../src/services/AreaService";
import { instanciaArea as area } from "../utils";

test('debería crear y guardar un área en la base de datos', async () => {

    const areaCreada = await AreaService.crearArea(area);

    const areaDB = await globalThis.prisma.areas.findUnique({
        where: { id: areaCreada.id },
    });

    expect(areaDB).toBeTruthy();
    expect(areaDB?.nombre).toBe(area.nombre);
});
