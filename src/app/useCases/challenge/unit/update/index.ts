import { ChallengeUnitUpload } from '@domain/entities/challenge/unit/uploads';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeUnitNotFound } from '@useCases/errors/ChallengeUnitNotFound';

type UpdateChallengeUnitDTO = {
    id: string;
    challengeId: string;
    userId: string;
    uploads: ChallengeUnitUpload[];
};

@Injectable()
export class UpdateChallengeUnitUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute(payload: UpdateChallengeUnitDTO): Promise<void> {
        const found = await this.repository.findById(payload.id);
        if (!found) {
            throw new ChallengeUnitNotFound();
        }

        found.update({
            ...payload,
        });
        return this.repository.update(found);
    }
}
