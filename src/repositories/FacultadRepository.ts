import { FacultadAtributos } from "../types";
import { PrismaClient } from "@prisma/client";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class FacultadRepository {
    private readonly model = prisma.facultades;
    private readonly includes?: any
    private readonly creator: BaseCreator<FacultadAtributos>
    private readonly finder: BaseFinder<FacultadAtributos>
    private readonly updater: BaseUpdater<FacultadAtributos>
    private readonly deleter: BaseDeleter<FacultadAtributos>
    constructor() {
        this.creator = new BaseCreator<FacultadAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<FacultadAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<FacultadAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }
    async crear(facultad: FacultadAtributos): Promise<FacultadAtributos> {
        return await this.creator.crear(facultad)
    }
    async buscarPorId(id: number): Promise<FacultadAtributos | null> {
        return await this.finder.buscarPorId(id)
    }
    async actualizar(id: number, nuevosDatos: Partial<FacultadAtributos>): Promise<FacultadAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }
    async eliminar(id: number): Promise<FacultadAtributos | null> {
        return this.deleter.eliminar(id)
    }
};

