/*
  Warnings:

  - You are about to drop the column `fechanacimiento` on the `Alumnos` table. All the data in the column will be lost.
  - Added the required column `fechaNacimiento` to the `Alumnos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Alumnos" DROP COLUMN "fechanacimiento",
ADD COLUMN     "fechaNacimiento" TEXT NOT NULL;
