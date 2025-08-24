import { PrismaClient } from "@prisma/client";
import { EspecialidadAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class EspecialidadRepository {
    protected readonly model = prisma.especialidades
    protected readonly includes?: any;

    private readonly creator: BaseCreator<EspecialidadAtributos>
    private readonly finder: BaseFinder<EspecialidadAtributos>
    private readonly updater: BaseUpdater<EspecialidadAtributos>
    private readonly deleter: BaseDeleter<EspecialidadAtributos>

    constructor() {
        this.creator = new BaseCreator<EspecialidadAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<EspecialidadAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<EspecialidadAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: EspecialidadAtributos): Promise<EspecialidadAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<EspecialidadAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<EspecialidadAtributos>): Promise<EspecialidadAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<EspecialidadAtributos | null> {
        return this.deleter.eliminar(id)
    }
}