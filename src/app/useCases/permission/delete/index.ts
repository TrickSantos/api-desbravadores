import { PermissionRepository } from '@domain/repositories/permission.repository';
import { Injectable } from '@nestjs/common';
import { PermissionNotFound } from '@useCases/errors/PermissionNotFound';

@Injectable()
export class DeletePermissionUseCase {
    constructor(private repository: PermissionRepository) {}

    async execute(id: string) {
        const place = await this.repository.findById(id);
        if (place) {
            return this.repository.delete(id);
        } else {
            throw new PermissionNotFound();
        }
    }
}
