import { DepartamentoService } from "../../src/services/DepartamentoService";
import { instanciaDepartamento as departamento } from "../utils";

test('debería crear y guardar un departamento en la base de datos', async () => {

    const departamentoCreado = await DepartamentoService.crearDepartamento(departamento);

    const departamentoDB = await globalThis.prisma.departamentos.findUnique({
        where: { id: departamentoCreado.id },
    });

    expect(departamentoDB).toBeTruthy();
    expect(departamentoDB?.nombre).toBe(departamento.nombre);
});
