import { PrismaClient } from "@prisma/client";
import { UniversidadAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class UniversidadRepository {
    protected readonly model = prisma.universidades;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<UniversidadAtributos>
    private readonly finder: BaseFinder<UniversidadAtributos>
    private readonly updater: BaseUpdater<UniversidadAtributos>
    private readonly deleter: BaseDeleter<UniversidadAtributos>

    constructor() {
        this.creator = new BaseCreator<UniversidadAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<UniversidadAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<UniversidadAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: UniversidadAtributos): Promise<UniversidadAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<UniversidadAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<UniversidadAtributos>): Promise<UniversidadAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<UniversidadAtributos | null> {
        return this.deleter.eliminar(id)
    }
}
