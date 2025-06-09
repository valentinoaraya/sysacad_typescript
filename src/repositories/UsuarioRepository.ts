import { PrismaClient, Usuarios } from '@prisma/client';
import { BaseCreator, BaseFinder, BaseUpdater, BaseDeleter } from './base/BaseCrudOperations';

export class UsuarioRepository {
    private readonly prisma: PrismaClient;
    private readonly model: any;
    private readonly includes: any;

    private readonly creator: BaseCreator<Usuarios>;
    private readonly finder: BaseFinder<Usuarios>;
    private readonly updater: BaseUpdater<Usuarios>;
    private readonly deleter: BaseDeleter;

    constructor() {
        this.prisma = new PrismaClient();
        this.model = this.prisma.usuarios;
        this.includes = {
            // Aquí puedes definir las relaciones que quieres incluir
            // Por ejemplo:
            // rol: true,
            // permisos: true
        };

        // Inicializamos las operaciones base
        this.creator = new BaseCreator<Usuarios>(this.model, this.includes);
        this.finder = new BaseFinder<Usuarios>(this.model, this.includes);
        this.updater = new BaseUpdater<Usuarios>(this.model, this.includes);
        this.deleter = new BaseDeleter(this.model);
    }

    // Métodos que delegan a las operaciones base
    async crear(data: Usuarios): Promise<Usuarios> {
        return this.creator.crear(data);
    }

    async buscarPorId(id: number): Promise<Usuarios | null> {
        return this.finder.buscarPorId(id);
    }

    async actualizar(id: number, nuevosDatos: Partial<Usuarios>): Promise<Usuarios> {
        return this.updater.actualizar(id, nuevosDatos);
    }

    async eliminar(id: number): Promise<void> {
        return this.deleter.eliminar(id);
    }

    // Métodos específicos para Usuario
    async buscarPorEmail(email: string): Promise<Usuarios | null> {
        try {
            const usuario = await this.model.findUnique({
                where: { email },
                include: this.includes
            });
            return usuario;
        } catch (error: any) {
            throw new Error(`Error al buscar usuario por email: ${error}`);
        }
    }

    // Método para cerrar la conexión cuando sea necesario
    async desconectar(): Promise<void> {
        await this.prisma.$disconnect();
    }
}

// Ejemplo de un repositorio que solo necesita buscar y eliminar
export class UsuarioLogRepository {
    private readonly prisma: PrismaClient;
    private readonly model: any;
    private readonly includes: any;

    private readonly finder: BaseFinder<Usuarios>;
    private readonly deleter: BaseDeleter;

    constructor() {
        this.prisma = new PrismaClient();
        this.model = this.prisma.usuarios;
        this.includes = {
            // Aquí puedes definir las relaciones específicas para los logs
        };

        // Solo inicializamos las operaciones que necesitamos
        this.finder = new BaseFinder<Usuarios>(this.model, this.includes);
        this.deleter = new BaseDeleter(this.model);
    }

    async buscarPorId(id: number): Promise<Usuarios | null> {
        return this.finder.buscarPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        return this.deleter.eliminar(id);
    }

    // Métodos específicos para UsuarioLog
    async buscarPorUsuarioId(usuarioId: number): Promise<Usuarios[]> {
        try {
            const logs = await this.model.findMany({
                where: { id: usuarioId },
                include: this.includes
            });
            return logs;
        } catch (error: any) {
            throw new Error(`Error al buscar logs por usuario: ${error}`);
        }
    }

    async desconectar(): Promise<void> {
        await this.prisma.$disconnect();
    }
}
