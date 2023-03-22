import {
    Challenge,
    ChallengeCategory,
} from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindChallengeByCategory {
    constructor(private repository: ChallengeRepository) {}

    async execute(category: ChallengeCategory): Promise<Challenge[]> {
        return await this.repository.findByCategory(category);
    }
}
