/*
  Warnings:

  - You are about to drop the column `isActive` on the `Specialty` table. All the data in the column will be lost.
  - Added the required column `category` to the `Specialty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Specialty" DROP COLUMN "isActive",
ADD COLUMN     "category" TEXT NOT NULL;
