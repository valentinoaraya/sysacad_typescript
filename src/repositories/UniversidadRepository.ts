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
            if (!universidadBD) throw new Error(`No se encontró Universidad con el id ${id}`)

            return universidadBD

        } catch (error: any) {
            throw new Error(`Error al obtener una Universidad con el id ${id}}`)
        }
    }

    static async actualizar(id: number, nuevosDatos: Partial<UniversidadAtributos>): Promise<UniversidadAtributos> {
        try {

            const universidadActualizada = await prisma.universidades.update({
                where: { id },
                data: nuevosDatos
            })

            if (!universidadActualizada) throw new Error(`No se encontró universidad con el id ${id}}`)

            return universidadActualizada

        } catch (error: any) {
            throw new Error(`Error al actualizar datos de la universidad: ${error}}`)
        }
    }

    static async eliminar(id:number):Promise<void>{
        await prisma.universidades.delete({
            where:{id},
        });
    }

}
