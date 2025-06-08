import { BaseRepository } from "./BaseRepository";
import { PrismaClient } from "@prisma/client";
import { TipoDedicacionAtributos } from "../types";

const prisma = new PrismaClient();

export class TipoDedicacionRepository extends BaseRepository<TipoDedicacionAtributos> {
    protected readonly model = prisma.tiposDedicaciones;
    protected readonly includes?: any;
}
