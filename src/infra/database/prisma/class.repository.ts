import { Class } from '@domain/entities/user/class/class';
import { Class as PrismaClass } from '@prisma/client';
import { ClassRepository } from '@domain/repositories/class.repository';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaClassRepository implements ClassRepository {
    constructor(private readonly prisma: PrismaService) {}

    toClass(classe: PrismaClass): Class {
        return new Class(classe, classe.id);
    }

    async create(classe: Class): Promise<void> {
        await this.prisma.class.create({
            data: {
                id: classe.id,
                name: classe.name,
            },
        });
    }

    async update(classe: Class): Promise<void> {
        await this.prisma.class.update({
            where: { id: classe.id },
            data: {
                name: classe.name,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.class.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Class> {
        const classe = await this.prisma.class.findUnique({
            where: { id },
        });
        return this.toClass(classe);
    }

    async findAll(): Promise<Class[]> {
        const classes = await this.prisma.class.findMany();
        return classes.map((classe) => this.toClass(classe));
    }
}
