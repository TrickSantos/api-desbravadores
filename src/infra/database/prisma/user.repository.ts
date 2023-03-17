import { User } from '@domain/entities/user/user';
import { UserRepository } from '@domain/repositories/user.repository';
import { Gender } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) {}

    parseGender(gender: string) {
        return gender === 'MASCULINO' ? Gender.MASCULINO : Gender.FEMININO;
    }

    async create(user: User): Promise<void> {
        await this.prisma.user.create({
            data: {
                id: user.id,
                clubId: user.clubId,
                name: user.name,
                email: user.email,
                password: user.password,
                birthday: user.birthday,
                gender: this.parseGender(user.gender),
            },
        });
    }

    async update(user: User): Promise<void> {
        await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                clubId: user.clubId,
                name: user.name,
                email: user.email,
                password: user.password,
                birthday: user.birthday,
                gender: this.parseGender(user.gender),
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id,
            },
        });
    }

    async findById(id: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            return null;
        }

        return new User(user, user.id);
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();

        return users.map((user) => new User(user, user.id));
    }
}
