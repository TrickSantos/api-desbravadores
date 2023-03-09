/*
  Warnings:

  - The primary key for the `Classe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nome` on the `Classe` table. All the data in the column will be lost.
  - You are about to drop the `Clube` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Especialidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UnidadeMembros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClasseToUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EspecialidadeToUsuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Classe` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MASCULINO', 'FEMININO');

-- DropForeignKey
ALTER TABLE "Unidade" DROP CONSTRAINT "Unidade_clubeId_fkey";

-- DropForeignKey
ALTER TABLE "UnidadeMembros" DROP CONSTRAINT "UnidadeMembros_unidadeId_fkey";

-- DropForeignKey
ALTER TABLE "UnidadeMembros" DROP CONSTRAINT "UnidadeMembros_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "_ClasseToUsuario" DROP CONSTRAINT "_ClasseToUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClasseToUsuario" DROP CONSTRAINT "_ClasseToUsuario_B_fkey";

-- DropForeignKey
ALTER TABLE "_EspecialidadeToUsuario" DROP CONSTRAINT "_EspecialidadeToUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_EspecialidadeToUsuario" DROP CONSTRAINT "_EspecialidadeToUsuario_B_fkey";

-- AlterTable
ALTER TABLE "Classe" DROP CONSTRAINT "Classe_pkey",
DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Classe_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Classe_id_seq";

-- DropTable
DROP TABLE "Clube";

-- DropTable
DROP TABLE "Especialidade";

-- DropTable
DROP TABLE "Unidade";

-- DropTable
DROP TABLE "UnidadeMembros";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "_ClasseToUsuario";

-- DropTable
DROP TABLE "_EspecialidadeToUsuario";

-- CreateTable
CREATE TABLE "Club" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "fundation" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "association" TEXT NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,
    "logo" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT,
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "permissionId" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UnitToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClasseToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_SpecialtyToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_UnitToUser_AB_unique" ON "_UnitToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_UnitToUser_B_index" ON "_UnitToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClasseToUser_AB_unique" ON "_ClasseToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ClasseToUser_B_index" ON "_ClasseToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpecialtyToUser_AB_unique" ON "_SpecialtyToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SpecialtyToUser_B_index" ON "_SpecialtyToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UnitToUser" ADD CONSTRAINT "_UnitToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UnitToUser" ADD CONSTRAINT "_UnitToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClasseToUser" ADD CONSTRAINT "_ClasseToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Classe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClasseToUser" ADD CONSTRAINT "_ClasseToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpecialtyToUser" ADD CONSTRAINT "_SpecialtyToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Specialty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpecialtyToUser" ADD CONSTRAINT "_SpecialtyToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
