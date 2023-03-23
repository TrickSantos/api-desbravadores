import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeUserNotFound } from '@useCases/errors/ChallengeUserNotFound';

@Injectable()
export class FindChallengeUserByIdUseCase {
    constructor(private repository: ChallengeUserRepository) {}

    async execute(id: string): Promise<ChallengeUser> {
        const response = await this.repository.findById(id);
        if (response) {
            return response;
        } else {
            throw new ChallengeUserNotFound();
        }
    }
}
