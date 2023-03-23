import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllChallengeUnitUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute(): Promise<ChallengeUnit[]> {
        return await this.repository.findAll();
    }
}
