import { Role } from '@domain/entities/user/role/role';
import { Role as PrismaRole } from '@prisma/client';
import { RoleRepository } from '@domain/repositories/role.repository';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRoleRepository implements RoleRepository {
    constructor(private prisma: PrismaService) {}

    toClass(role: PrismaRole) {
        return new Role(
            {
                name: role.name,
                isActive: role.isActive,
                createdAt: role.createdAt,
                updatedAt: role.updatedAt,
            },
            role.id,
        );
    }

    async create(role: Role): Promise<void> {
        await this.prisma.role.create({
            data: {
                id: role.id,
                name: role.name,
                isActive: role.isActive,
                createdAt: role.createdAt,
                updatedAt: role.updatedAt,
            },
        });
    }

    async update(role: Role): Promise<void> {
        await this.prisma.role.update({
            where: { id: role.id },
            data: {
                name: role.name,
                isActive: role.isActive,
                createdAt: role.createdAt,
                updatedAt: role.updatedAt,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.role.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Role> {
        const role = await this.prisma.role.findUnique({
            where: { id },
        });
        return this.toClass(role);
    }

    async findAll(): Promise<Role[]> {
        const roles = await this.prisma.role.findMany();
        return roles.map((role) => this.toClass(role));
    }
}
