import { BaseRepository } from "./BaseRepository";
import { PrismaClient } from "@prisma/client";
import { CargoAtributos } from "../types";
import { CategoriaCargo } from "../models/CategoriaCargo";
import { TipoDedicacion } from "../models/TipoDedicacion";

const prisma = new PrismaClient();
export class CargoRepository extends BaseRepository<CargoAtributos> {
    protected readonly model = prisma.cargos;
    protected readonly includes = {
        categoriaCargo: true,
        tipoDedicacion: true,

    };
}
