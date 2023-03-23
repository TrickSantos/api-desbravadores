import { Injectable } from '@nestjs/common';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { ChallengeUserNotFound } from '@useCases/errors/ChallengeUserNotFound';
import { ChallengeUserUpload } from '@domain/entities/challenge/user/uploads';

type UpdateChallengeUserDTO = {
    id: string;
    challengeId: string;
    userId: string;
    uploads: ChallengeUserUpload[];
};

@Injectable()
export class UpdateChallengeUserUseCase {
    constructor(private repository: ChallengeUserRepository) {}

    async execute(payload: UpdateChallengeUserDTO): Promise<void> {
        const found = await this.repository.findById(payload.id);
        if (!found) {
            throw new ChallengeUserNotFound();
        }

        found.update({
            ...payload,
        });
        return this.repository.update(found);
    }
}
