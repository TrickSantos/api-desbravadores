import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeUserNotFound } from '@useCases/errors/ChallengeUserNotFound';

@Injectable()
export class DeleteChallengeUserUseCase {
    constructor(private repository: ChallengeUserRepository) {}

    async execute(id: string): Promise<void> {
        const challengeUser = await this.repository.findById(id);
        if (challengeUser) {
            return this.repository.delete(challengeUser.id);
        } else {
            throw new ChallengeUserNotFound();
        }
    }
}
