import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindChallengeUnitByChallengeIdUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute(id: string): Promise<ChallengeUnit[]> {
        return await this.repository.findByChallengeId(id);
    }
}
