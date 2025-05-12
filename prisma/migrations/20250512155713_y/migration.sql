/*
  Warnings:

  - You are about to drop the `Universidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Universidad";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Universidades" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,

    CONSTRAINT "Universidades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");
