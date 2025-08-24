import { PrismaClient } from "@prisma/client";
import { PlanAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class PlanRepository {
    protected readonly model = prisma.planes
    protected readonly includes?: any;

    private readonly creator: BaseCreator<PlanAtributos>
    private readonly finder: BaseFinder<PlanAtributos>
    private readonly updater: BaseUpdater<PlanAtributos>
    private readonly deleter: BaseDeleter<PlanAtributos>

    constructor() {
        this.creator = new BaseCreator<PlanAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<PlanAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<PlanAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: PlanAtributos): Promise<PlanAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<PlanAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<PlanAtributos>): Promise<PlanAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<PlanAtributos | null> {
        return this.deleter.eliminar(id)
    }
}