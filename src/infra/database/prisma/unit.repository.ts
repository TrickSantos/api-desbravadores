import { Unit } from '@domain/entities/unit/unit';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import unitMapper from '@mappers/unitMapper';

@Injectable()
export class PrismaUnitRepository implements UnitRepository {
    constructor(private readonly prisma: PrismaService) {}

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

        return unitMapper.toClass(unit);
    }

    async findAll(): Promise<Unit[]> {
        return await this.prisma.unit
            .findMany()
            .then((units) => units.map(unitMapper.toClass));
    }

    async addMember(payload: {
        unitId: string;
        memberId: string;
    }): Promise<void> {
        await this.prisma.unit.update({
            where: { id: payload.unitId },
            data: {
                members: {
                    connect: { id: payload.memberId },
                },
            },
        });
    }

    async removeMember(payload: {
        unitId: string;
        memberId: string;
    }): Promise<void> {
        await this.prisma.unit.update({
            where: { id: payload.unitId },
            data: {
                members: {
                    disconnect: { id: payload.memberId },
                },
            },
        });
    }
}
