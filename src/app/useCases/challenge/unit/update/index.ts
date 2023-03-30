import { ChallengeUnitUpload } from '@domain/entities/challenge/unit/uploads';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';
import { ChallengeUnitNotFound } from '@useCases/errors/ChallengeUnitNotFound';

type uploadsPayload = {
    url: string;
    description?: string;
};

type UpdateChallengeUnitDTO = {
    id: string;
    challengeId: string;
    unitId: string;
    uploads: uploadsPayload[];
};

@Injectable()
export class UpdateChallengeUnitUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute({
        uploads,
        ...payload
    }: UpdateChallengeUnitDTO): Promise<void> {
        const found = await this.repository.findById(payload.id);
        if (!found) {
            throw new ChallengeUnitNotFound();
        }

        const userUploads = uploads.map(
            (upload) =>
                new ChallengeUnitUpload({
                    ...upload,
                    challengeUnitId: found.id,
                }),
        );

        found.update({
            uploads: userUploads,
            ...payload,
        });

        return this.repository.update(found);
    }
}
