import { PrismaClient } from "@prisma/client";
import { GrupoAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class GrupoRepository {
    protected readonly model = prisma.grupos;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<GrupoAtributos>
    private readonly finder: BaseFinder<GrupoAtributos>
    private readonly updater: BaseUpdater<GrupoAtributos>
    private readonly deleter: BaseDeleter<GrupoAtributos>

    constructor() {
        this.creator = new BaseCreator<GrupoAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<GrupoAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<GrupoAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: GrupoAtributos): Promise<GrupoAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<GrupoAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<GrupoAtributos>): Promise<GrupoAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<GrupoAtributos | null> {
        return this.deleter.eliminar(id)
    }
}