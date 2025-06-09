import { PlanService } from "../../src/services/PlanService"
import { instanciaPlan as plan } from "../utils";

test("Deberia crear y guardad un plan en la base de datos", async () => {
    const planCreado = await PlanService.crearPlan(plan);
    const planBD = await globalThis.prisma.planes.findUnique({
        where: { id: planCreado.id },
    });

    expect(planBD).toBeTruthy()
    expect(planBD?.nombre).toBe(plan.nombre)
    expect(planBD?.fechaInicio).toBe(plan.fechaInicio)
    expect(planBD?.fechaFin).toBe(plan.fechaFin)
    expect(planBD?.observacion).toBe(plan.observacion)
})
