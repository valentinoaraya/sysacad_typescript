import { PrismaClient } from "@prisma/client";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";
import { AlumnoAtributos } from "../types";

const prisma = new PrismaClient();

export class AlumnoRepository {
    protected readonly model = prisma.alumnos

    private readonly creator: BaseCreator<AlumnoAtributos>
    private readonly finder: BaseFinder<AlumnoAtributos>
    private readonly updater: BaseUpdater<AlumnoAtributos>
    private readonly deleter: BaseDeleter<AlumnoAtributos>

    constructor() {
        this.creator = new BaseCreator<AlumnoAtributos>(this.model)
        this.finder = new BaseFinder<AlumnoAtributos>(this.model)
        this.updater = new BaseUpdater<AlumnoAtributos>(this.model)
        this.deleter = new BaseDeleter(this.model)
    }

    async crear(data: AlumnoAtributos): Promise<AlumnoAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<AlumnoAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<AlumnoAtributos>): Promise<AlumnoAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<AlumnoAtributos | null> {
        return this.deleter.eliminar(id)
    }
    
}