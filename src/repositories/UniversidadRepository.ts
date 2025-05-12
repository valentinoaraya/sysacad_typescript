import { Universidad } from "../models/Universidad";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UniversidadRepository {
    static async crear(universidad: Universidad): Promise<Universidad> {
        const universidadCreada = await prisma.universidad.create({
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
}
