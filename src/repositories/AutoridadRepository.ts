import { AutoridadAtributos } from "../types";
import { PrismaClient } from "@prisma/client";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class AutoridadRepository {
    protected readonly model = new PrismaClient().autoridades;
    protected readonly includes = {
        cargo: true,
    };

    private readonly creator: BaseCreator<AutoridadAtributos>
    private readonly finder: BaseFinder<AutoridadAtributos>
    private readonly updater: BaseUpdater<AutoridadAtributos>
    private readonly deleter: BaseDeleter<AutoridadAtributos>

    constructor() {
        this.creator = new BaseCreator<AutoridadAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<AutoridadAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<AutoridadAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: AutoridadAtributos): Promise<AutoridadAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<AutoridadAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<AutoridadAtributos>): Promise<AutoridadAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<AutoridadAtributos | null> {
        return this.deleter.eliminar(id)
    }
}

