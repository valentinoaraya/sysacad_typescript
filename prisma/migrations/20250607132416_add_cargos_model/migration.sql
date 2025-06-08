-- CreateTable
CREATE TABLE "Autoridades" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Autoridades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "categoriaId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriasCargo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriasCargo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Autoridades_email_key" ON "Autoridades"("email");

-- AddForeignKey
ALTER TABLE "Autoridades" ADD CONSTRAINT "Autoridades_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cargos" ADD CONSTRAINT "Cargos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "CategoriasCargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
