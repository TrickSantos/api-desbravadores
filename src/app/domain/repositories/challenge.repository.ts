import {
    Challenge,
    ChallengeCategory,
    ChallengeType,
} from '@domain/entities/challenge/challenge';

type findByCategoryAndTypeDTO = {
    category: ChallengeCategory;
    type: ChallengeType;
};

export abstract class ChallengeRepository {
    abstract create(challenge: Challenge): Promise<void>;
    abstract update(challenge: Challenge): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Challenge>;
    abstract findAll(): Promise<Challenge[]>;
    abstract findByCategory(category: ChallengeCategory): Promise<Challenge[]>;
    abstract findByType(type: ChallengeType): Promise<Challenge[]>;
    abstract findByCategoryAndType(
        payload: findByCategoryAndTypeDTO,
    ): Promise<Challenge[]>;
}
