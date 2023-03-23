import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeNotFound } from '@useCases/errors/ChallengeNotFound';

@Injectable()
export class DeleteChallengeUseCase {
    constructor(private repository: ChallengeRepository) {}

    async execute(id: string): Promise<void> {
        const challenge = await this.repository.findById(id);
        if (challenge) {
            return this.repository.delete(challenge.id);
        } else {
            throw new ChallengeNotFound();
        }
    }
}
