import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllChallengeUserUseCase {
    constructor(private repository: ChallengeUserRepository) {}

    async execute(): Promise<ChallengeUser[]> {
        return await this.repository.findAll();
    }
}
