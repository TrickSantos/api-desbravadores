import { Challenge } from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeNotFound } from '@useCases/errors/ChallengeNotFound';

@Injectable()
export class FindChallengeById {
    constructor(private repository: ChallengeRepository) {}

    async execute(id: string): Promise<Challenge> {
        const response = await this.repository.findById(id);
        if (response) {
            return response;
        } else {
            throw new ChallengeNotFound();
        }
    }
}
