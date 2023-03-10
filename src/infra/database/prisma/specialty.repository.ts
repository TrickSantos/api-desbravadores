import { Specialty } from '@domain/entities/user/specialty/specialty';
import { Specialty as PrismaSpecialty } from '@prisma/client';
import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { PrismaService } from './prisma.service';

export class PrismaSpecialtyRepository implements SpecialtyRepository {
    constructor(private prisma: PrismaService) {}

    toClass(specialty: PrismaSpecialty) {
        return new Specialty(
            {
                name: specialty.name,
                category: specialty.category,
            },
            specialty.id,
        );
    }

    async create(specialty: Specialty): Promise<void> {
        await this.prisma.specialty.create({
            data: {
                id: specialty.id,
                name: specialty.name,
                category: specialty.category,
            },
        });
    }

    async update(specialty: Specialty): Promise<void> {
        await this.prisma.specialty.update({
            where: { id: specialty.id },
            data: {
                name: specialty.name,
                category: specialty.category,
            },
        });
    }

    async delete(specialty: Specialty): Promise<void> {
        await this.prisma.specialty.delete({
            where: { id: specialty.id },
        });
    }

    async findById(id: string): Promise<Specialty> {
        const specialty = await this.prisma.specialty.findUnique({
            where: { id },
        });
        return this.toClass(specialty);
    }

    async findAll(): Promise<Specialty[]> {
        const specialties = await this.prisma.specialty.findMany();
        return specialties.map((specialty) => this.toClass(specialty));
    }
}
