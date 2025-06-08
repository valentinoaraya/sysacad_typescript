-- AlterTable
ALTER TABLE "Autoridades" ADD COLUMN     "tipoDedicacionId" INTEGER;

-- CreateTable
CREATE TABLE "TiposDedicaciones" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "observacion" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TiposDedicaciones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TiposDedicaciones_nombre_key" ON "TiposDedicaciones"("nombre");

-- AddForeignKey
ALTER TABLE "Autoridades" ADD CONSTRAINT "Autoridades_tipoDedicacionId_fkey" FOREIGN KEY ("tipoDedicacionId") REFERENCES "TiposDedicaciones"("id") ON DELETE SET NULL ON UPDATE CASCADE;
