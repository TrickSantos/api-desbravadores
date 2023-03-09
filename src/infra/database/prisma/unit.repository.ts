import { Unit } from '@domain/entities/unit/unit';
import { Unit as PrismaUnit } from '@prisma/client';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { PrismaService } from './prisma.service';

export class PrismaUnitRepository implements UnitRepository {
    constructor(private readonly prisma: PrismaService) {}

    toClass(unit: PrismaUnit): Unit {
        return new Unit(unit, unit.id);
    }

    async create(unit: Unit): Promise<void> {
        await this.prisma.unit.create({
            data: {
                clubId: unit.clubId,
                id: unit.id,
                name: unit.name,
                logo: unit.logo,
                isActive: unit.isActive,
            },
        });
    }

    async update(unit: Unit): Promise<void> {
        await this.prisma.unit.update({
            where: { id: unit.id },
            data: {
                clubId: unit.clubId,
                name: unit.name,
                logo: unit.logo,
                isActive: unit.isActive,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.unit.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Unit> {
        const unit = await this.prisma.unit.findUnique({
            where: { id },
        });

        if (!unit) {
            return null;
        }

        return this.toClass(unit);
    }

    async findAll(): Promise<Unit[]> {
        return await this.prisma.unit
            .findMany()
            .then((units) => units.map(this.toClass));
    }
}
