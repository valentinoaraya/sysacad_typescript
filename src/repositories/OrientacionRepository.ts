import { PrismaClient } from "@prisma/client";
import { OrientacionAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();
export class OrientacionRepository {
    protected readonly model = prisma.orientaciones;
    protected readonly includes = {
        especialidad: true,
        plan: true,
        materia: true
    };

    private readonly creator: BaseCreator<OrientacionAtributos>
    private readonly finder: BaseFinder<OrientacionAtributos>
    private readonly updater: BaseUpdater<OrientacionAtributos>
    private readonly deleter: BaseDeleter<OrientacionAtributos>

    constructor() {
        this.creator = new BaseCreator<OrientacionAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<OrientacionAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<OrientacionAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: OrientacionAtributos): Promise<OrientacionAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<OrientacionAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<OrientacionAtributos>): Promise<OrientacionAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<OrientacionAtributos | null> {
        return this.deleter.eliminar(id)
    }
}
