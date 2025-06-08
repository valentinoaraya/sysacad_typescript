import { AutoridadAtributos } from "../types";
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class AutoridadRepository extends BaseRepository<AutoridadAtributos> {
    protected readonly model = new PrismaClient().autoridades;
    protected readonly includes = {
        cargo: true,
    };
}

