import { CategoriaCargoAtributos } from "../types";
import { PrismaClient } from "@prisma/client";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient()
export class CategoriaCargoRepository {
    protected readonly model = prisma.categoriasCargo;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<CategoriaCargoAtributos>
    private readonly finder: BaseFinder<CategoriaCargoAtributos>
    private readonly updater: BaseUpdater<CategoriaCargoAtributos>
    private readonly deleter: BaseDeleter<CategoriaCargoAtributos>

    constructor() {
        this.creator = new BaseCreator<CategoriaCargoAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<CategoriaCargoAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<CategoriaCargoAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: CategoriaCargoAtributos): Promise<CategoriaCargoAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<CategoriaCargoAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<CategoriaCargoAtributos>): Promise<CategoriaCargoAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<CategoriaCargoAtributos | null> {
        return this.deleter.eliminar(id)
    }
}
