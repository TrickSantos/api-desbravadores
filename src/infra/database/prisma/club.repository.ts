import { Club } from '@domain/entities/club/club';
import { Club as PrismaClub } from '@prisma/client';
import { ClubRepository } from '@domain/repositories/club.repository';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaClubRepository implements ClubRepository {
    constructor(private readonly prisma: PrismaService) {}

    toClass(club: PrismaClub): Club {
        return new Club(club, club.id);
    }

    async create(club: Club): Promise<void> {
        await this.prisma.club.create({
            data: {
                id: club.id,
                name: club.name,
                association: club.association,
                city: club.city,
                state: club.state,
                fundation: club.fundation,
                logo: club.logo,
            },
        });
    }

    async update(club: Club): Promise<void> {
        await this.prisma.club.update({
            where: { id: club.id },
            data: {
                id: club.id,
                name: club.name,
                association: club.association,
                city: club.city,
                state: club.state,
                fundation: club.fundation,
                logo: club.logo,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.club.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Club> {
        const club = await this.prisma.club.findUnique({
            where: { id },
        });

        if (!club) {
            return null;
        }

        return this.toClass(club);
    }

    async findAll() {
        const clubs = await this.prisma.club.findMany();
        return clubs.map((club) => this.toClass(club));
    }
}
