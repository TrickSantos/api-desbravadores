import { Club } from '@domain/entities/club/club';
import { ClubRepository } from '@domain/repositories/club.repository';
import { Injectable } from '@nestjs/common';
import { ClubNotFound } from '@useCases/errors/ClubNotFound';

@Injectable()
export class FindClubById {
    constructor(private organizationRepository: ClubRepository) {}

    async execute(id: string): Promise<Club> {
        const response = await this.organizationRepository.findById(id);
        if (response) {
            return response;
        } else {
            throw new ClubNotFound();
        }
    }
}
