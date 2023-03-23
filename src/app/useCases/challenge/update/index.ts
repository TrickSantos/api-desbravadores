import {
    ChallengeCategory,
    ChallengeType,
} from '@domain/entities/challenge/challenge';
import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeNotFound } from '@useCases/errors/ChallengeNotFound';

type UpdateChallengeDTO = {
    id: string;
    name?: string;
    description?: string;
    cover?: string;
    point?: number;
    category?: ChallengeCategory;
    type?: ChallengeType;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};

@Injectable()
export class UpdateChallengeUseCase {
    constructor(private repository: ChallengeRepository) {}

    async execute(payload: UpdateChallengeDTO): Promise<void> {
        const found = await this.repository.findById(payload.id);
        if (found) {
            found.update({
                ...payload,
            });
            return this.repository.update(found);
        } else {
            throw new ChallengeNotFound();
        }
    }
}
