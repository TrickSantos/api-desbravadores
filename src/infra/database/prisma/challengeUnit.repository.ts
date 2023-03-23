import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import challengeUnitMapper from '@mappers/challengeUnitMapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaChallengeUnitRepository implements ChallengeUnitRepository {
    constructor(private prisma: PrismaService) {}

    async completeChallenge(challengeUnit: ChallengeUnit): Promise<void> {
        await this.prisma.challengeUnit.create({
            data: {
                id: challengeUnit.id,
                challengeId: challengeUnit.challengeId,
                unitId: challengeUnit.unitId,
                isCompleted: challengeUnit.isCompleted,
                createdAt: challengeUnit.createdAt,
                updatedAt: challengeUnit.updatedAt,
                uploads: {
                    createMany: {
                        data: challengeUnit.uploads.map((upload) => ({
                            id: upload.id,
                            challengeUnitId: upload.challengeUnitId,
                            url: upload.url,
                            createdAt: upload.createdAt,
                            updatedAt: upload.updatedAt,
                        })),
                        skipDuplicates: true,
                    },
                },
            },
        });
    }

    async update(challengeUnit: ChallengeUnit): Promise<void> {
        await this.prisma.challengeUnit.update({
            where: { id: challengeUnit.id },
            data: {
                isCompleted: challengeUnit.isCompleted,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.challengeUnit.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<ChallengeUnit> {
        const challengeUnit = await this.prisma.challengeUnit.findUnique({
            where: { id },
            include: {
                uploads: true,
            },
        });

        return challengeUnitMapper.toClass(challengeUnit);
    }

    async findAll(): Promise<ChallengeUnit[]> {
        const challengeUnits = await this.prisma.challengeUnit.findMany({
            include: {
                uploads: true,
            },
        });

        return challengeUnits.map(challengeUnitMapper.toClass);
    }

    async findByChallengeId(id: string): Promise<ChallengeUnit[]> {
        const challengeUnits = await this.prisma.challengeUnit.findMany({
            where: { challengeId: id },
            include: {
                uploads: true,
            },
        });

        return challengeUnits.map(challengeUnitMapper.toClass);
    }

    async findByChallengeIdAndUnitId(payload: {
        challengeId: string;
        unitId: string;
    }): Promise<ChallengeUnit> {
        const challengeUnit = await this.prisma.challengeUnit.findFirst({
            where: {
                challengeId: payload.challengeId,
                unitId: payload.unitId,
            },
            include: {
                uploads: true,
            },
        });

        return challengeUnitMapper.toClass(challengeUnit);
    }
}
