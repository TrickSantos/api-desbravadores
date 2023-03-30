import {
    Challenge,
    ChallengeCategory,
    ChallengeType,
} from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';

type CreateChallengeDTO = {
    name: string;
    description: string;
    cover: string;
    point: number;
    category: ChallengeCategory;
    type: ChallengeType;
};

@Injectable()
export class CreateChallengeUseCase {
    constructor(private repository: ChallengeRepository) {}

    async execute(data: CreateChallengeDTO): Promise<void> {
        const organization = new Challenge(data);

        return this.repository.create(organization);
    }
}
