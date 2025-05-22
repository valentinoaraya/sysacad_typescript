import { PlanService } from "../src/services/PlanService"
import { plan } from "../src/utils"

test("Deberia eliminar un plan por el ID en la base de datos", async ()=>{
    const planBD = await PlanService.crearPlan(plan);
    
    await PlanService.eliminarPlan(planBD.id as number);
    const planBorrado = await globalThis.prisma.plan.findUnique({
        where : { id : planBD.id as number },
    });

    expect(planBorrado).toBeFalsy();
})