import { PrismaClient } from "@prisma/client";
import { TipoDedicacionAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class TipoDedicacionRepository {
    protected readonly model = prisma.tiposDedicaciones;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<TipoDedicacionAtributos>
    private readonly finder: BaseFinder<TipoDedicacionAtributos>
    private readonly updater: BaseUpdater<TipoDedicacionAtributos>
    private readonly deleter: BaseDeleter<TipoDedicacionAtributos>

    constructor() {
        this.creator = new BaseCreator<TipoDedicacionAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<TipoDedicacionAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<TipoDedicacionAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: TipoDedicacionAtributos): Promise<TipoDedicacionAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<TipoDedicacionAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<TipoDedicacionAtributos>): Promise<TipoDedicacionAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<TipoDedicacionAtributos | null> {
        return this.deleter.eliminar(id)
    }
}
