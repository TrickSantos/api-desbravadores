import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';
import { ChallengeUnitUpload } from '@domain/entities/challenge/unit/uploads';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { Injectable } from '@nestjs/common';

type uploadsPayload = {
    url: string;
    description?: string;
};

type completeChallengeUnitPayload = {
    challengeId: string;
    unitId: string;
    uploads: uploadsPayload[];
};

@Injectable()
export class CompleteChallengeUnitUseCase {
    constructor(private repository: ChallengeUnitRepository) {}

    async execute({
        uploads,
        ...payload
    }: completeChallengeUnitPayload): Promise<void> {
        const challengeUnit = new ChallengeUnit(payload);
        const userUploads = uploads.map(
            (upload) =>
                new ChallengeUnitUpload({
                    ...upload,
                    challengeUnitId: challengeUnit.id,
                }),
        );

        challengeUnit.update({
            uploads: userUploads,
        });

        return this.repository.completeChallenge(challengeUnit);
    }
}
