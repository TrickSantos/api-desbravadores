import { Permission } from '@domain/entities/user/permission/permission';
import { PermissionRepository } from '@domain/repositories/permission.repository';
import { Permission as PrismaPermission } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPermissionRepository implements PermissionRepository {
    constructor(private prisma: PrismaService) {}

    toClass(permission: PrismaPermission) {
        return new Permission(
            {
                name: permission.name,
                isActive: permission.isActive,
                createdAt: permission.createdAt,
                updatedAt: permission.updatedAt,
            },
            permission.id,
        );
    }

    async create(permission: Permission): Promise<void> {
        await this.prisma.permission.create({
            data: {
                id: permission.id,
                name: permission.name,
                isActive: permission.isActive,
                createdAt: permission.createdAt,
                updatedAt: permission.updatedAt,
            },
        });
    }

    async update(permission: Permission): Promise<void> {
        await this.prisma.permission.update({
            where: { id: permission.id },
            data: {
                name: permission.name,
                isActive: permission.isActive,
                createdAt: permission.createdAt,
                updatedAt: permission.updatedAt,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.permission.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Permission> {
        const permission = await this.prisma.permission.findUnique({
            where: { id },
        });
        return this.toClass(permission);
    }

    async findAll(): Promise<Permission[]> {
        const permissions = await this.prisma.permission.findMany();
        return permissions.map((permission) => this.toClass(permission));
    }
}
