import { Universidad } from "../models/Universidad";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UniversidadRepository {
    static async crear(universidad: Universidad): Promise<Universidad> {
        const universidadCreada = await prisma.universidades.create({
            data: {
                nombre: universidad.nombre,
                sigla: universidad.sigla,
            },
        });

        return new Universidad(
            universidadCreada.nombre,
            universidadCreada.sigla,
            universidadCreada.id
        );
    }
    static async buscarPorId(id: number): Promise<Universidad | null> {
        const universidadBD = await prisma.universidades.findUnique({ where: { id } });
        if (!universidadBD) return null;
        
        return new Universidad(universidadBD.nombre, universidadBD.sigla, universidadBD.id);
    }
    
}
