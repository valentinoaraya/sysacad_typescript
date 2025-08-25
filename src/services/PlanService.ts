import { PlanRepository } from "../repositories/PlanRepository";
import { PlanAtributos } from "../types";

export class PlanService {
    private static readonly PlanRepository = new PlanRepository();

    static crearPlan(plan: PlanAtributos): Promise<PlanAtributos> {
        return this.PlanRepository.crear(plan);
    }
    static obtenerPlanPorId(id: number): Promise<PlanAtributos | null> {
        return this.PlanRepository.buscarPorId(id);
    }
    static actualizarPlan(id: number, nuevosDatos: Partial<PlanAtributos>): Promise<PlanAtributos | null> {
        return this.PlanRepository.actualizar(id, nuevosDatos);
    }
    static eliminarPlan(id: number): Promise<PlanAtributos | null> {
        return this.PlanRepository.eliminar(id);
    }
}