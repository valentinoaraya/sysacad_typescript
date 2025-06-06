import { PrismaClient } from "@prisma/client";
import { AlumnoAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class AlumnoRepository extends BaseRepository<AlumnoAtributos> {
    protected readonly model = prisma.alumnos
    protected readonly includes?: any;
}