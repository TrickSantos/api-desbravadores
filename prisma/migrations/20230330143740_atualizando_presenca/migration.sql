/*
  Warnings:

  - You are about to drop the column `unitId` on the `Presenca` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Presenca" DROP CONSTRAINT "Presenca_unitId_fkey";

-- AlterTable
ALTER TABLE "Presenca" DROP COLUMN "unitId";
