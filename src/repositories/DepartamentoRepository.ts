import { PrismaClient } from "@prisma/client";
import { DepartamentoAtributos } from "../types";
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from "./BaseRepository";

const prisma = new PrismaClient();

export class DepartamentoRepository {
    protected readonly model = prisma.departamentos;
    protected readonly includes?: any;

    private readonly creator: BaseCreator<DepartamentoAtributos>;
    private readonly finder: BaseFinder<DepartamentoAtributos>;
    private readonly updater: BaseUpdater<DepartamentoAtributos>;
    private readonly deleter: BaseDeleter<DepartamentoAtributos>;

    constructor() {
        this.creator = new BaseCreator<DepartamentoAtributos>(this.model, this.includes);
        this.finder = new BaseFinder<DepartamentoAtributos>(this.model, this.includes);
        this.updater = new BaseUpdater<DepartamentoAtributos>(this.model, this.includes);
        this.deleter = new BaseDeleter(this.model, this.includes);
    }

    async crear(data: DepartamentoAtributos): Promise<DepartamentoAtributos> {
        return this.creator.crear(data);
    }

    async buscarPorId(id: number): Promise<DepartamentoAtributos | null> {
        return this.finder.buscarPorId(id);
    }

    async actualizar(id: number, nuevosDatos: Partial<DepartamentoAtributos>): Promise<DepartamentoAtributos | null> {
        return this.updater.actualizar(id, nuevosDatos);
    }

    async eliminar(id: number): Promise<DepartamentoAtributos | null> {
        return this.deleter.eliminar(id);
    }
}
