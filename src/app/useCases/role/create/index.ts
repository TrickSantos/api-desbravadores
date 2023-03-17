import { Role } from '@domain/entities/user/role/role';
import { RoleRepository } from '@domain/repositories/role.repository';
import { Injectable } from '@nestjs/common';

type CreateRoleDTO = {
    name: string;
};

@Injectable()
export class CreateRoleUseCase {
    constructor(private repository: RoleRepository) {}

    async execute(data: CreateRoleDTO): Promise<void> {
        const category = new Role(data);

        return this.repository.create(category);
    }
}
