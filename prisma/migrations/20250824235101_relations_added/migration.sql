/*
  Warnings:

  - Added the required column `especialidadId` to the `Alumnos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facultadId` to the `Alumnos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `universidadId` to the `Facultades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Alumnos" ADD COLUMN     "especialidadId" INTEGER NOT NULL,
ADD COLUMN     "facultadId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Facultades" ADD COLUMN     "universidadId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Alumnos" ADD CONSTRAINT "Alumnos_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES "Facultades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumnos" ADD CONSTRAINT "Alumnos_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facultades" ADD CONSTRAINT "Facultades_universidadId_fkey" FOREIGN KEY ("universidadId") REFERENCES "Universidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
