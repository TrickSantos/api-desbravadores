import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';

type findByChallengeIdAndUserIdPayload = {
    challengeId: string;
    userId: string;
};

type uploadsPayload = {
    url: string;
    description?: string;
};

type completeChallengePayload = {
    challengeId: string;
    userId: string;
    uploads: uploadsPayload[];
};

export abstract class ChallengeUserRepository {
    abstract create(challengeUser: ChallengeUser): Promise<void>;
    abstract update(challengeUser: ChallengeUser): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<ChallengeUser>;
    abstract findAll(): Promise<ChallengeUser[]>;
    abstract findByChallengeId(id: string): Promise<ChallengeUser[]>;
    abstract findByUserId(id: string): Promise<ChallengeUser[]>;
    abstract findByChallengeIdAndUserId(
        payload: findByChallengeIdAndUserIdPayload,
    ): Promise<ChallengeUser>;
    abstract completeChallenge(
        payload: completeChallengePayload,
    ): Promise<void>;
}
