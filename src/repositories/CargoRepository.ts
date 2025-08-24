import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";
import { PrismaClient } from "@prisma/client";
import { CargoAtributos } from "../types";

const prisma = new PrismaClient();
export class CargoRepository {
    protected readonly model = prisma.cargos;
    protected readonly includes = {
        categoriaCargo: true,
        tipoDedicacion: true,
    };

    private readonly creator: BaseCreator<CargoAtributos>
    private readonly finder: BaseFinder<CargoAtributos>
    private readonly updater: BaseUpdater<CargoAtributos>
    private readonly deleter: BaseDeleter<CargoAtributos>

    constructor() {
        this.creator = new BaseCreator<CargoAtributos>(this.model, this.includes)
        this.finder = new BaseFinder<CargoAtributos>(this.model, this.includes)
        this.updater = new BaseUpdater<CargoAtributos>(this.model, this.includes)
        this.deleter = new BaseDeleter(this.model, this.includes)
    }

    async crear(data: CargoAtributos): Promise<CargoAtributos> {
        return this.creator.crear(data)
    }

    async buscarPorId(id: number): Promise<CargoAtributos | null> {
        return this.finder.buscarPorId(id)
    }

    async actualizar(id: number, nuevosDatos: Partial<CargoAtributos>): Promise<CargoAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos)
    }

    async eliminar(id: number): Promise<CargoAtributos | null> {
        return this.deleter.eliminar(id)
    }
}
