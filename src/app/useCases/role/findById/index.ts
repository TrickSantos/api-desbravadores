import { Role } from '@domain/entities/user/role/role';
import { RoleRepository } from '@domain/repositories/role.repository';
import { Injectable } from '@nestjs/common';
import { RoleNotFound } from '@useCases/errors/RoleNotFound';

@Injectable()
export class FindRoleByIdUseCase {
    constructor(private readonly repository: RoleRepository) {}

    async execute(id: string): Promise<Role> {
        const found = await this.repository.findById(id);
        if (found) {
            return found;
        } else {
            throw new RoleNotFound();
        }
    }
}
