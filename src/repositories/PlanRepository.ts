import { PrismaClient } from "@prisma/client";
import { PlanAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class PlanRepository extends BaseRepository<PlanAtributos> {
    protected readonly model = prisma.planes
    protected readonly includes?: any;
}