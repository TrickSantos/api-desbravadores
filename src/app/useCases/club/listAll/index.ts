import { Club } from '@domain/entities/club/club';
import { ClubRepository } from '@domain/repositories/club.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllClubs {
    constructor(private organizationRepository: ClubRepository) {}

    async execute(): Promise<Club[]> {
        return this.organizationRepository.findAll();
    }
}
