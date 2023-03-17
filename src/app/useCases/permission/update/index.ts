import { PermissionRepository } from '@domain/repositories/permission.repository';
import { Injectable } from '@nestjs/common';
import { PermissionNotFound } from '@useCases/errors/PermissionNotFound';

type UpdatePermissionDTO = {
    id: string;
    name?: string;
    isActive?: boolean;
};

@Injectable()
export class UpdatePermissionUseCase {
    constructor(private repository: PermissionRepository) {}

    async execute(data: UpdatePermissionDTO) {
        const found = await this.repository.findById(data.id);
        if (found) {
            found.update({
                ...data,
            });
            return this.repository.update(found);
        } else {
            throw new PermissionNotFound();
        }
    }
}
