import { PresencaRepository } from '@domain/repositories/presenca.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Presenca } from '@domain/entities/challenge/presenca/presenca';

@Injectable()
export class PresencaPrismaRepository implements PresencaRepository {
    constructor(private prisma: PrismaService) {}

    async create(presenca: Presenca): Promise<void> {
        await this.prisma.presenca.create({
            data: {
                id: presenca.id,
                userId: presenca.userId,
                reunionId: presenca.reunionId,
                date: presenca.date,
                potualidade: presenca.potualidade,
                biblia: presenca.biblia,
                caderno: presenca.caderno,
                lenco: presenca.lenco,
                vestuario: presenca.vestuario,
            },
        });
    }

    async update(presenca: Presenca): Promise<void> {
        await this.prisma.presenca.update({
            where: { id: presenca.id },
            data: {
                userId: presenca.userId,
                reunionId: presenca.reunionId,
                date: presenca.date,
                potualidade: presenca.potualidade,
                biblia: presenca.biblia,
                caderno: presenca.caderno,
                lenco: presenca.lenco,
                vestuario: presenca.vestuario,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.presenca.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Presenca> {
        const presenca = await this.prisma.presenca.findUnique({
            where: { id },
        });
        return new Presenca(presenca, presenca.id);
    }

    async findAll(): Promise<Presenca[]> {
        const presencas = await this.prisma.presenca.findMany();
        return presencas.map((presenca) => new Presenca(presenca, presenca.id));
    }
}
