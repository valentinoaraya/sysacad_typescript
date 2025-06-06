export abstract class BaseRepository<T> {
    protected abstract readonly model: any;
    protected abstract readonly includes?: any;

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

    async buscarPorId(id: number): Promise<T | null> {
        try {
            const entidad = await this.model.findUnique({
                where: { id },
                include: this.includes
            });
            if (!entidad) throw new Error(`No se encontró la entidad con el id ${id}`);
            return entidad;
        } catch (error: any) {
            throw new Error(`Error al obtener la entidad con el id ${id}: ${error}`);
        }
    }

    async actualizar(id: number, nuevosDatos: Partial<T>): Promise<T> {
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
