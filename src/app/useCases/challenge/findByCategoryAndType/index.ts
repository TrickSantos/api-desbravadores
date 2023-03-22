import {
    Challenge,
    ChallengeCategory,
    ChallengeType,
} from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';

type findByCategoryAndTypePayload = {
    category: ChallengeCategory;
    type: ChallengeType;
};

@Injectable()
export class FindChallengeByCategoryAndType {
    constructor(private repository: ChallengeRepository) {}

    async execute(payload: findByCategoryAndTypePayload): Promise<Challenge[]> {
        return await this.repository.findByCategoryAndType(payload);
    }
}
