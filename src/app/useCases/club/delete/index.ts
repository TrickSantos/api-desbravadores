import { ClubRepository } from '@domain/repositories/club.repository';
import { Injectable } from '@nestjs/common';
import { ClubNotFound } from '@useCases/errors/ClubNotFound';

@Injectable()
export class DeleteClub {
    constructor(private repository: ClubRepository) {}

    async execute(id: string): Promise<void> {
        const club = await this.repository.findById(id);
        if (club) {
            return this.repository.delete(club.id);
        } else {
            throw new ClubNotFound();
        }
    }
}
