import { PrismaClient } from "@prisma/client";
import { MateriaAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class MateriaRepository {
    protected readonly model = prisma.materias;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<MateriaAtributos>
    private readonly finder: BaseFinder<MateriaAtributos>
    private readonly updater: BaseUpdater<MateriaAtributos>
    private readonly deleter: BaseDeleter<MateriaAtributos>

    constructor() {
        this.creator = new BaseCreator<MateriaAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<MateriaAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<MateriaAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: MateriaAtributos): Promise<MateriaAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<MateriaAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<MateriaAtributos>): Promise<MateriaAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<MateriaAtributos | null> {
        return this.deleter.eliminar(id)
    }
}