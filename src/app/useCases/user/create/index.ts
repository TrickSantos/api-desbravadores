import { Injectable } from '@nestjs/common';
import { hash, genSalt } from 'bcrypt';
import { UserRepository } from '@domain/repositories/user.repository';
import { User } from '@domain/entities/user/user';

type CreateUserDTO = {
    clubId: string;
    name: string;
    password: string;
    email: string;
    birthday: Date;
    gender: string;
};

@Injectable()
export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(data: CreateUserDTO): Promise<void> {
        const salt = await genSalt(12);
        const password = await hash(data.password ?? 'senha', salt);
        const user = new User({
            ...data,
            password,
        });

        return this.userRepository.create(user);
    }
}
