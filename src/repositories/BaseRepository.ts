export abstract class BaseRepository<T> {
    protected abstract readonly model: any;

    async crear(data: T): Promise<T> {
        try {
            let dataToPersist: any = data;
            if (data && typeof (data as any).toPlainObject === 'function') {
                dataToPersist = (data as any).toPlainObject();
            }

            const entidadCreada = await this.model.create({
                data: dataToPersist,
            });
            return entidadCreada as T;
        } catch (error: any) {
            throw new Error(`Error al crear entidad: ${error}`);
        }
    }

    async buscarPorId(id: number): Promise<T | null> {
        try {
            const entidad = await this.model.findUnique({ where: { id } });
            if (!entidad) throw new Error(`No se encontró la entidad con el id ${id}`);
            return entidad;
        } catch (error: any) {
            throw new Error(`Error al obtener la entidad con el id ${id}: ${error}`);
        }
    }

    async actualizar(id: number, nuevosDatos: Partial<T>): Promise<T> {
        try {
            const entidadActualizada = await this.model.update({
                where: { id },
                data: nuevosDatos,
            });
            if (!entidadActualizada) throw new Error(`No se encontró la entidad con el id ${id}`);
            return entidadActualizada;
        } catch (error: any) {
            throw new Error(`Error al actualizar datos de la entidad: ${error}`);
        }
    }

    async eliminar(id: number): Promise<void> {
        try {
            await this.model.delete({
                where: { id },
            });
        } catch (error: any) {
            throw new Error(`Error al eliminar la entidad: ${error}`);
        }
    }
}
