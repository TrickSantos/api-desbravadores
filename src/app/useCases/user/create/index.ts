import { UserRepository } from '@domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
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
        const user = new User(data);

        return this.userRepository.create(user);
    }
}
