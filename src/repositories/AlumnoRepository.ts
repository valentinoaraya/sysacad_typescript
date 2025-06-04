import { PrismaClient } from "@prisma/client";
import { AlumnosAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class AlumnoRepository extends BaseRepository<AlumnosAtributos> {
    protected readonly model = prisma.alumnos
}