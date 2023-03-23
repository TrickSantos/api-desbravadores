import {
    Challenge,
    ChallengeCategory,
    ChallengeType,
} from '@domain/entities/challenge/challenge';
import { Challenge as ChallengePrisma } from '@prisma/client';

type Input = ChallengePrisma;

class ChallengeMapper {
    toClass(data: Input): Challenge {
        return new Challenge(
            {
                category: ChallengeCategory[data.category],
                type: ChallengeType[data.type],
                description: data.description,
                name: data.name,
                point: data.point,
                cover: data.cover,
                isActive: data.isActive,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
            data.id,
        );
    }
}

export default new ChallengeMapper();
