import { DepartamentoService } from "../../src/services/DepartamentoService";
import { instanciaDepartamento as departamento } from "../utils";

test('debería eliminar un departamento por ID de la base de datos', async () => {
    const departamentoDB = await DepartamentoService.crearDepartamento(departamento);

    await DepartamentoService.eliminarDepartamento(departamentoDB.id as number);

    const departamentoBorrado = await globalThis.prisma.departamentos.findUnique({
        where: { id: departamentoDB.id }
    });

    expect(departamentoBorrado).toBeFalsy();
});
