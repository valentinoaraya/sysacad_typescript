import { PrismaClient } from "@prisma/client";
import { EspecialidadAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class EspecialidadRepository extends BaseRepository<EspecialidadAtributos> {
    protected readonly model = prisma.especialidades
}