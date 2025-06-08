import { BaseRepository } from "./BaseRepository";
import { CategoriaCargoAtributos } from "../types";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export class CategoriaCargoRepository extends BaseRepository<CategoriaCargoAtributos>{
    protected readonly model = prisma.categoriasCargo;
    protected readonly includes?: any;
}
