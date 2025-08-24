import { DepartamentoService } from "../../src/services/DepartamentoService";
import { instanciaDepartamento as departamento } from "../utils";

test("debería crear un departamento en la base de datos y luego actualizar su nombre", async () => {

    const departamentoCreado = await DepartamentoService.crearDepartamento(departamento);

    const nuevosDatosDepartamento = {
        nombre: "Primer departamento"
    };

    const departamentoActualizado = await DepartamentoService.actualizarDepartamento(
        departamentoCreado.id as number,
        nuevosDatosDepartamento
    );

    expect(departamentoActualizado).toBeTruthy();
    expect(departamentoActualizado?.id).toBe(departamentoCreado.id);
    expect(departamentoActualizado?.nombre).toBe(nuevosDatosDepartamento.nombre);
});
