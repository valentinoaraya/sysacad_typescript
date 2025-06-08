/*
  Warnings:

  - You are about to drop the column `tipoDedicacionId` on the `Autoridades` table. All the data in the column will be lost.
  - Added the required column `puntos` to the `Cargos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDedicacionId` to the `Cargos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Autoridades" DROP CONSTRAINT "Autoridades_tipoDedicacionId_fkey";

-- DropIndex
DROP INDEX "Autoridades_email_key";

-- AlterTable
ALTER TABLE "Autoridades" DROP COLUMN "tipoDedicacionId";

-- AlterTable
ALTER TABLE "Cargos" ADD COLUMN     "puntos" INTEGER NOT NULL,
ADD COLUMN     "tipoDedicacionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Cargos" ADD CONSTRAINT "Cargos_tipoDedicacionId_fkey" FOREIGN KEY ("tipoDedicacionId") REFERENCES "TiposDedicaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
