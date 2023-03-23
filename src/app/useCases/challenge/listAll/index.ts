import { Challenge } from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllChallengesUseCase {
    constructor(private repository: ChallengeRepository) {}

    async execute(): Promise<Challenge[]> {
        return await this.repository.findAll();
    }
}
