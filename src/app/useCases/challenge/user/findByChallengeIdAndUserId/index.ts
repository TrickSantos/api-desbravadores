import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { Injectable } from '@nestjs/common';

type findByChallengeIdAndUserIdPayload = {
    challengeId: string;
    userId: string;
};

@Injectable()
export class FindChallengeUserByChallengeIdAndUserIdUseCase {
    constructor(private repository: ChallengeUserRepository) {}

    async execute(
        payload: findByChallengeIdAndUserIdPayload,
    ): Promise<ChallengeUser> {
        return await this.repository.findByChallengeIdAndUserId(payload);
    }
}
