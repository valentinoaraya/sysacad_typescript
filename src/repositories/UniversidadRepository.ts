import { PrismaClient } from "@prisma/client";
import { UniversidadAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class UniversidadRepository extends BaseRepository<UniversidadAtributos> {
    protected readonly model = prisma.universidades;
}
