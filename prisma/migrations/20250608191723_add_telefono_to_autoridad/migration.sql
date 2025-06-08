/*
  Warnings:

  - Added the required column `telefono` to the `Autoridades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Autoridades" ADD COLUMN     "telefono" TEXT NOT NULL;
