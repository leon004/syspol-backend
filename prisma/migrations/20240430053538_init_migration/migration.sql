-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Juez', 'Policia');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Infraccion" (
    "id" SERIAL NOT NULL,
    "folio" TEXT NOT NULL,
    "policiaId" INTEGER NOT NULL,
    "placas" TEXT NOT NULL,
    "pais" TEXT,
    "estado" TEXT,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "year" INTEGER,
    "color" TEXT,
    "motivoDeMulta" VARCHAR(255) NOT NULL,
    "articuloFraccion" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "nombreInfractor" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagenes" TEXT,

    CONSTRAINT "Infraccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehiculo" (
    "id" SERIAL NOT NULL,
    "placas" TEXT NOT NULL,
    "estado" TEXT,
    "vin" TEXT,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "year" INTEGER,
    "color" TEXT,

    CONSTRAINT "Vehiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_usuario_key" ON "User"("usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Vehiculo_placas_key" ON "Vehiculo"("placas");

-- AddForeignKey
ALTER TABLE "Infraccion" ADD CONSTRAINT "Infraccion_policiaId_fkey" FOREIGN KEY ("policiaId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
