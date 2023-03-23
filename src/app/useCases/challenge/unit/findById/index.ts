import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeUnitNotFound } from '@useCases/errors/ChallengeUnitNotFound';

@Injectable()
export class FindChallengeUnitByIdUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute(id: string): Promise<ChallengeUnit> {
        const response = await this.repository.findById(id);
        if (!response) {
            throw new ChallengeUnitNotFound();
        }
        return response;
    }
}
