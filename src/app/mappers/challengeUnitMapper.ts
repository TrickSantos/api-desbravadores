import { ChallengeUnit } from '@domain/entities/challenge/unit/challengeUnit';
import { ChallengeUnitUpload } from '@domain/entities/challenge/unit/uploads';
import {
    ChallengeUnit as ChallengeUnitPrisma,
    ChallengeUnitUploads as ChallengeUnitUploadPrisma,
} from '@prisma/client';

type Input = ChallengeUnitPrisma & {
    uploads: ChallengeUnitUploadPrisma[];
};

class ChallengeUnitMapper {
    toClass(data: Input): ChallengeUnit {
        const uploads = data.uploads.map(
            (upload) => new ChallengeUnitUpload(upload, upload.id),
        );

        return new ChallengeUnit(
            {
                challengeId: data.challengeId,
                unitId: data.unitId,
                uploads,
                isCompleted: data.isCompleted,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
            data.id,
        );
    }
}

export default new ChallengeUnitMapper();
