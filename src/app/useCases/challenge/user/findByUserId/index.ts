import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindChallangeUserByUserIdUseCase {
    constructor(private repository: ChallengeUserRepository) {}

    async execute(id: string): Promise<ChallengeUser[]> {
        return await this.repository.findByUserId(id);
    }
}
