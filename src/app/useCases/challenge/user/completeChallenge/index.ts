import { ChallengeUser } from '@domain/entities/challenge/user/challengeUser';
import { ChallengeUserUpload } from '@domain/entities/challenge/user/uploads';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { Injectable } from '@nestjs/common';

type uploadsPayload = {
    url: string;
    description?: string;
};

type completeChallengeUserPayload = {
    challengeId: string;
    userId: string;
    uploads: uploadsPayload[];
};

@Injectable()
export class CompleteChallengeUserUseCase {
    constructor(private repository: ChallengeUserRepository) {}

    async execute({
        uploads,
        ...payload
    }: completeChallengeUserPayload): Promise<void> {
        const challengeUser = new ChallengeUser(payload);
        const userUploads = uploads.map(
            (upload) =>
                new ChallengeUserUpload({
                    ...upload,
                    challengeUserId: challengeUser.id,
                }),
        );

        challengeUser.update({
            uploads: userUploads,
        });

        return this.repository.completeChallenge(challengeUser);
    }
}
