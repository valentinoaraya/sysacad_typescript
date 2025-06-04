import { PrismaClient } from "@prisma/client";
import { MateriaAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class MateriaRepository extends BaseRepository<MateriaAtributos> {
    protected readonly model = prisma.materias;
}