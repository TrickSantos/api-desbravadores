import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeUnitNotFound } from '@useCases/errors/ChallengeUnitNotFound';

@Injectable()
export class DeleteChallengeUnitUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute(id: string): Promise<void> {
        const challengeUnit = await this.repository.findById(id);
        if (challengeUnit) {
            return this.repository.delete(challengeUnit.id);
        } else {
            throw new ChallengeUnitNotFound();
        }
    }
}
