import { PrismaClient } from "@prisma/client";
import { GradoAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class GradoRepository {
    protected readonly model = prisma.grados;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<GradoAtributos>
    private readonly finder: BaseFinder<GradoAtributos>
    private readonly updater: BaseUpdater<GradoAtributos>
    private readonly deleter: BaseDeleter<GradoAtributos>

    constructor() {
        this.creator = new BaseCreator<GradoAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<GradoAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<GradoAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: GradoAtributos): Promise<GradoAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<GradoAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<GradoAtributos>): Promise<GradoAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<GradoAtributos | null> {
        return this.deleter.eliminar(id)
    }
}
