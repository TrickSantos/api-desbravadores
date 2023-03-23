import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';

type findByChallengeIdAndUnitIdPayload = {
    challengeId: string;
    unitId: string;
};

export abstract class ChallengeUnitRepository {
    abstract completeChallenge(challengeUnit: ChallengeUnit): Promise<void>;
    abstract update(challengeUnit: ChallengeUnit): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<ChallengeUnit>;
    abstract findAll(): Promise<ChallengeUnit[]>;
    abstract findByChallengeId(id: string): Promise<ChallengeUnit[]>;
    abstract findByChallengeIdAndUnitId(
        payload: findByChallengeIdAndUnitIdPayload,
    ): Promise<ChallengeUnit>;
}
