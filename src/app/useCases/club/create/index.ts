import { Club } from '@domain/entities/club/club';
import { ClubRepository } from '@domain/repositories/club.repository';
import { Injectable } from '@nestjs/common';

type CreateClubDTO = {
    name: string;
    logo: string;
    association: string;
    city: string;
    fundation: Date;
    state: string;
};

@Injectable()
export class CreateClubUseCase {
    constructor(private repository: ClubRepository) {}

    async execute(data: CreateClubDTO): Promise<void> {
        const organization = new Club(data);

        return this.repository.create(organization);
    }
}
