import { PlanService } from "../../src/services/PlanService"
import { instanciaPlan as plan } from "../utils";

test("Deberia crear un plan en la base de datos y actualizar el campo nombre", async () => {
    const planCreado = await PlanService.crearPlan(plan);
    const nuevosDatosPlan = {
        nombre: "2025"
    }
    const planActualizado = await PlanService.actualizarPlan(planCreado.id as number, nuevosDatosPlan);

    expect(planActualizado).toBeTruthy();
    expect(planActualizado?.id).toBe(planCreado.id);
    expect(planActualizado?.nombre).toBe(planCreado.nombre);
    expect(planActualizado?.fechaInicio).toBe(planCreado.fechaInicio);
    expect(planActualizado?.fechaFin).toBe(planCreado.fechaFin);
    expect(planActualizado?.observacion).toBe(planCreado.observacion);
})