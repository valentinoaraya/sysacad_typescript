export class BaseCreator<T> {
    constructor(
        protected readonly model: any,
        protected readonly includes?: any
    ) { }

    async crear(data: T): Promise<T> {
        try {
            let dataToPersist: any = data;
            if (data && typeof (data as any).toPlainObject === 'function') {
                dataToPersist = (data as any).toPlainObject();
            }

            const entidadCreada = await this.model.create({
                data: dataToPersist,
                include: this.includes
            });
            return entidadCreada as T;
        } catch (error: any) {
            throw new Error(`Error al crear entidad: ${error}`);
        }
    }
}

export class BaseFinder<T> {
    constructor(
        protected readonly model: any,
        protected readonly includes?: any,
    ) { }

    async buscarPorId(id: number): Promise<T | null> {
        try {
            const entidad = await this.model.findUnique({
                where: { id },
                include: this.includes
            });
            return entidad;
        } catch (error: any) {
            throw new Error(`Error al obtener la entidad con el id ${id}: ${error}`);
        }
    }

}

export class BaseUpdater<T> {
    constructor(
        protected readonly model: any,
        protected readonly includes?: any,
    ) { }

    async actualizar(id: number, nuevosDatos: Partial<T>): Promise<T | null> {
        try {
            if ('id' in nuevosDatos) {
                throw new Error('No se puede actualizar el campo id');
            }

            const entidadActualizada = await this.model.update({
                where: { id },
                data: nuevosDatos,
                include: this.includes
            });
            if (!entidadActualizada) throw new Error(`No se encontró la entidad con el id ${id}`);
            return entidadActualizada;
        } catch (error: any) {
            throw new Error(`Error al actualizar datos de la entidad: ${error}`);
        }
    }
}

export class BaseDeleter<T> {

    constructor(
        protected readonly model: any,
        protected readonly includes?: any,
    ) { }

    async eliminar(id: number): Promise<T | null> {
        try {
            const entidadEliminada = await this.model.delete({
                where: { id },
            });

            if (!entidadEliminada) throw new Error(`No se encontró la entidad con el id ${id}`)

            return entidadEliminada
        } catch (error: any) {
            throw new Error(`Error al eliminar la entidad: ${error}`);
        }
    }
}
