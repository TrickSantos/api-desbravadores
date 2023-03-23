import { Challenge, ChallengeType } from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindChallengeByTypeUseCase {
    constructor(private repository: ChallengeRepository) {}

    async execute(type: ChallengeType): Promise<Challenge[]> {
        return await this.repository.findByType(type);
    }
}
