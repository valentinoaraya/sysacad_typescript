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

-- CreateTable
CREATE TABLE "Alumnos" (
    "nroLegajo" INTEGER NOT NULL,
    "apellido" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "nroDocumento" TEXT NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "fechaNacimiento" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "fechaIngreso" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alumnos_pkey" PRIMARY KEY ("nroLegajo")
);

-- CreateTable
CREATE TABLE "CategoriasCargo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriasCargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TiposDedicaciones" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "observacion" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TiposDedicaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "puntos" INTEGER NOT NULL,
    "descripcion" TEXT,
    "categoriaId" INTEGER NOT NULL,
    "tipoDedicacionId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autoridades" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Autoridades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Orientaciones" ADD CONSTRAINT "Orientaciones_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orientaciones" ADD CONSTRAINT "Orientaciones_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Planes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orientaciones" ADD CONSTRAINT "Orientaciones_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cargos" ADD CONSTRAINT "Cargos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "CategoriasCargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cargos" ADD CONSTRAINT "Cargos_tipoDedicacionId_fkey" FOREIGN KEY ("tipoDedicacionId") REFERENCES "TiposDedicaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Autoridades" ADD CONSTRAINT "Autoridades_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
