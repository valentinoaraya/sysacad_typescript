/*
  Warnings:

  - You are about to drop the `Especialidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Materia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orientacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orientacion" DROP CONSTRAINT "Orientacion_especialidadId_fkey";

-- DropForeignKey
ALTER TABLE "Orientacion" DROP CONSTRAINT "Orientacion_materiaId_fkey";

-- DropForeignKey
ALTER TABLE "Orientacion" DROP CONSTRAINT "Orientacion_planId_fkey";

-- DropTable
DROP TABLE "Especialidad";

-- DropTable
DROP TABLE "Materia";

-- DropTable
DROP TABLE "Orientacion";

-- DropTable
DROP TABLE "Plan";

-- CreateTable
CREATE TABLE "Especialidades" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "letra" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "Especialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaInicio" TEXT NOT NULL,
    "fechaFin" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "Planes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "Materias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orientaciones" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "especialidadId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,

    CONSTRAINT "Orientaciones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orientaciones" ADD CONSTRAINT "Orientaciones_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orientaciones" ADD CONSTRAINT "Orientaciones_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Planes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orientaciones" ADD CONSTRAINT "Orientaciones_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
