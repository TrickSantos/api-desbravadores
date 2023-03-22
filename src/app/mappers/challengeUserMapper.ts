import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';
import { ChallengeUserUpload } from '@domain/entities/challenge/user/uploads';
import {
    ChallengeUser as ChallengeUserPrisma,
    ChallengeUserUploads as ChallengeUserUploadPrisma,
} from '@prisma/client';

type Input = ChallengeUserPrisma & {
    uploads: ChallengeUserUploadPrisma[];
};

class ChallengeUserMapper {
    toClass(data: Input): ChallengeUser {
        const uploads = data.uploads.map(
            (upload) => new ChallengeUserUpload(upload, upload.id),
        );

        return new ChallengeUser(
            {
                challengeId: data.challengeId,
                userId: data.userId,
                uploads,
                isCompleted: data.isCompleted,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
            data.id,
        );
    }
}

export default new ChallengeUserMapper();
