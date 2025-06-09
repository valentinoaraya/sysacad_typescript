/*
  Warnings:

  - The primary key for the `Alumnos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[nroLegajo]` on the table `Alumnos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Alumnos" DROP CONSTRAINT "Alumnos_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Alumnos_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Alumnos_nroLegajo_key" ON "Alumnos"("nroLegajo");
