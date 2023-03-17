import { RoleRepository } from '@domain/repositories/role.repository';
import { Injectable } from '@nestjs/common';
import { RoleNotFound } from '@useCases/errors/RoleNotFound';

type UpdateRoleDTO = {
    id: string;
    name?: string;
    isActive?: boolean;
};

@Injectable()
export class UpdateRoleUseCase {
    constructor(private repository: RoleRepository) {}

    async execute(data: UpdateRoleDTO) {
        const found = await this.repository.findById(data.id);
        if (found) {
            found.update({
                ...data,
            });
            return this.repository.update(found);
        } else {
            throw new RoleNotFound();
        }
    }
}
