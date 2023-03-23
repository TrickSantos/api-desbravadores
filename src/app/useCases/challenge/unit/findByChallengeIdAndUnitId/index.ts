import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';

type findByChallengeIdAndUnitIdPayload = {
    challengeId: string;
    unitId: string;
};

@Injectable()
export class FindChallengeUnitByChallengeIdAndUnitIdUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute(
        payload: findByChallengeIdAndUnitIdPayload,
    ): Promise<ChallengeUnit> {
        return await this.repository.findByChallengeIdAndUnitId(payload);
    }
}
