import { PrismaClient } from "@prisma/client";
import { AreaAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class AreaRepository {
    protected readonly model = prisma.areas;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<AreaAtributos>
    private readonly finder: BaseFinder<AreaAtributos>
    private readonly updater: BaseUpdater<AreaAtributos>
    private readonly deleter: BaseDeleter<AreaAtributos>

    constructor() {
        this.creator = new BaseCreator<AreaAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<AreaAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<AreaAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: AreaAtributos): Promise<AreaAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<AreaAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<AreaAtributos>): Promise<AreaAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<AreaAtributos | null> {
        return this.deleter.eliminar(id)
    }
}
