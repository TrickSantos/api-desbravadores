import { ClubRepository } from '@domain/repositories/club.repository';
import { Injectable } from '@nestjs/common';
import { ClubNotFound } from '@useCases/errors/ClubNotFound';

type UpdateClubDTO = {
    id: string;
    name?: string;
    logo?: string;
    isActive?: boolean;
    association?: string;
    city?: string;
    fundation?: Date;
    state?: string;
};

@Injectable()
export class UpdateClub {
    constructor(private repository: ClubRepository) {}

    async execute(club: UpdateClubDTO): Promise<void> {
        const found = await this.repository.findById(club.id);
        if (found) {
            found.update({
                ...club,
            });
            return this.repository.update(found);
        } else {
            throw new ClubNotFound();
        }
    }
}
