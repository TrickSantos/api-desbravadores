import { Reuniao } from '@domain/entities/challenge/presenca/reuniao';
import { ReuniaoRepository } from '@domain/repositories/reuniao.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import reuniaoMapper from '@mappers/reuniaoMapper';

@Injectable()
export class ReuniaoPrismaRepository implements ReuniaoRepository {
    constructor(private prisma: PrismaService) {}

    async create(classe: Reuniao): Promise<void> {
        await this.prisma.reunion.create({
            data: {
                id: classe.id,
                clubId: classe.clubId,
                name: classe.name,
                description: classe.description,
                date: classe.date,
                isActive: classe.isActive,
            },
        });
    }

    async update(classe: Reuniao): Promise<void> {
        await this.prisma.reunion.update({
            where: { id: classe.id },
            data: {
                clubId: classe.clubId,
                name: classe.name,
                description: classe.description,
                date: classe.date,
                isActive: classe.isActive,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.reunion.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Reuniao> {
        const reuniao = await this.prisma.reunion.findUnique({
            where: { id },
            include: {
                presencas: true,
            },
        });
        return reuniaoMapper.toClass(reuniao);
    }

    async findAll(): Promise<Reuniao[]> {
        const reunioes = await this.prisma.reunion.findMany({
            include: {
                presencas: true,
            },
        });

        return reunioes.map(reuniaoMapper.toClass);
    }
}
