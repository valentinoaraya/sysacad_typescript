import { PrismaClient } from "@prisma/client";
import { OrientacionAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();
export class OrientacionRepository extends BaseRepository <OrientacionAtributos> {
    protected readonly model = prisma.orientacion;
}