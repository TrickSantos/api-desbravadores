import {
    Challenge,
    ChallengeCategory,
    ChallengeType,
} from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import challengeMapper from '@mappers/challengeMapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaChallengeRepository implements ChallengeRepository {
    constructor(private prisma: PrismaService) {}

    async create(challenge: Challenge): Promise<void> {
        await this.prisma.challenge.create({
            data: {
                id: challenge.id,
                category: challenge.category,
                type: challenge.type,
                description: challenge.description,
                name: challenge.name,
                point: challenge.point,
                cover: challenge.cover,
            },
        });
    }

    async update(challenge: Challenge): Promise<void> {
        await this.prisma.challenge.update({
            where: { id: challenge.id },
            data: {
                category: challenge.category,
                type: challenge.type,
                description: challenge.description,
                name: challenge.name,
                point: challenge.point,
                cover: challenge.cover,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.challenge.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Challenge> {
        const challenge = await this.prisma.challenge.findUnique({
            where: { id },
        });

        return challengeMapper.toClass(challenge);
    }

    async findAll(): Promise<Challenge[]> {
        const challenges = await this.prisma.challenge.findMany();

        return challenges.map(challengeMapper.toClass);
    }

    async findByCategory(category: ChallengeCategory): Promise<Challenge[]> {
        const challenges = await this.prisma.challenge.findMany({
            where: { category },
        });

        return challenges.map(challengeMapper.toClass);
    }

    async findByType(type: ChallengeType): Promise<Challenge[]> {
        const challenges = await this.prisma.challenge.findMany({
            where: { type },
        });

        return challenges.map(challengeMapper.toClass);
    }

    async findByCategoryAndType(payload: {
        category: ChallengeCategory;
        type: ChallengeType;
    }): Promise<Challenge[]> {
        const challenges = await this.prisma.challenge.findMany({
            where: { category: payload.category, type: payload.type },
        });

        return challenges.map(challengeMapper.toClass);
    }
}
