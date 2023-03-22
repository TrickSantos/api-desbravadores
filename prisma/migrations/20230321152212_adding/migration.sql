-- CreateEnum
CREATE TYPE "Category" AS ENUM ('PRESENCA', 'CLASSE', 'PARTICIPACAO', 'ESPIRITUALIDADE', 'SOCIAL');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('INDIVIDUAL', 'EQUIPE');

-- CreateTable
CREATE TABLE "Challenge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cover" TEXT,
    "description" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "category" "Category" NOT NULL,
    "type" "Type" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeUnit" (
    "id" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengeUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeUnitUploads" (
    "id" TEXT NOT NULL,
    "challengeUnitId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengeUnitUploads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeUser" (
    "id" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengeUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeUserUploads" (
    "id" TEXT NOT NULL,
    "challengeUserId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengeUserUploads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChallengeUnit" ADD CONSTRAINT "ChallengeUnit_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeUnit" ADD CONSTRAINT "ChallengeUnit_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeUnitUploads" ADD CONSTRAINT "ChallengeUnitUploads_challengeUnitId_fkey" FOREIGN KEY ("challengeUnitId") REFERENCES "ChallengeUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeUser" ADD CONSTRAINT "ChallengeUser_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeUser" ADD CONSTRAINT "ChallengeUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeUserUploads" ADD CONSTRAINT "ChallengeUserUploads_challengeUserId_fkey" FOREIGN KEY ("challengeUserId") REFERENCES "ChallengeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
