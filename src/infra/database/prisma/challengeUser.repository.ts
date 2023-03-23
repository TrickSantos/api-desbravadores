import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import challengeUserMapper from '@mappers/challengeUserMapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaChallengeUserRepository implements ChallengeUserRepository {
    constructor(private prisma: PrismaService) {}

    async update(challengeUser: ChallengeUser): Promise<void> {
        await this.prisma.challengeUser.update({
            where: { id: challengeUser.id },
            data: {
                isCompleted: challengeUser.isCompleted,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.challengeUser.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<ChallengeUser> {
        const challengeUser = await this.prisma.challengeUser.findUnique({
            where: { id },
            include: {
                uploads: true,
            },
        });

        return challengeUserMapper.toClass(challengeUser);
    }

    async findAll(): Promise<ChallengeUser[]> {
        const challengeUsers = await this.prisma.challengeUser.findMany({
            include: {
                uploads: true,
            },
        });

        return challengeUsers.map(challengeUserMapper.toClass);
    }

    async findByChallengeId(id: string): Promise<ChallengeUser[]> {
        const challengeUsers = await this.prisma.challengeUser.findMany({
            where: { challengeId: id },
            include: {
                uploads: true,
            },
        });

        return challengeUsers.map(challengeUserMapper.toClass);
    }

    async findByUserId(id: string): Promise<ChallengeUser[]> {
        const challenges = await this.prisma.challengeUser.findMany({
            where: { userId: id },
            include: {
                uploads: true,
            },
        });

        return challenges.map(challengeUserMapper.toClass);
    }

    async findByChallengeIdAndUserId(payload: {
        challengeId: string;
        userId: string;
    }): Promise<ChallengeUser> {
        const challengeUser = await this.prisma.challengeUser.findFirst({
            where: {
                challengeId: payload.challengeId,
                userId: payload.userId,
            },
            include: {
                uploads: true,
            },
        });

        return challengeUserMapper.toClass(challengeUser);
    }

    async completeChallenge(payload: ChallengeUser): Promise<void> {
        await this.prisma.challengeUser.create({
            data: {
                id: payload.id,
                challengeId: payload.challengeId,
                userId: payload.userId,
                isCompleted: payload.isCompleted,
                createdAt: payload.createdAt,
                updatedAt: payload.updatedAt,
                uploads: {
                    create: payload.uploads.map((upload) => ({
                        url: upload.url,
                        description: upload.description,
                        id: upload.id,
                    })),
                },
            },
        });
    }
}
