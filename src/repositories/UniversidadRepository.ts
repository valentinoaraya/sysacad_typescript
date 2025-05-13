import { PrismaClient } from "@prisma/client";
import { UniversidadAtributos } from "../types";

const prisma = new PrismaClient();

export class UniversidadRepository {
    static async crear(universidad: UniversidadAtributos): Promise<UniversidadAtributos> {
        try {
            const universidadCreada = await prisma.universidades.create({
                data: {
                    nombre: universidad.nombre,
                    sigla: universidad.sigla,
                },
            });

            return universidadCreada
        } catch (error: any) {
            throw new Error(`Error al crear Universidad: ${error}}`)
        }
    }
    static async buscarPorId(id: number): Promise<UniversidadAtributos | null> {
        try {

            const universidadBD = await prisma.universidades.findUnique({ where: { id } });
            if (!universidadBD) throw new Error(`No se encontró Universidad con el id: ${id}`)

            return universidadBD

        } catch (error: any) {
            throw new Error(`Error al obtener una Universidad con el id: ${id}}`)
        }
    }

}
