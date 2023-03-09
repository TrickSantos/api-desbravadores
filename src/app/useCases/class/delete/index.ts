import { ClassRepository } from '@domain/repositories/class.repository';
import { Injectable } from '@nestjs/common';
import { ClassNotFound } from '@useCases/errors/ClassNotFound';

@Injectable()
export class DeleteClassUseCase {
    constructor(private repository: ClassRepository) {}

    async execute(id: string) {
        const place = await this.repository.findById(id);
        if (place) {
            return this.repository.delete(id);
        } else {
            throw new ClassNotFound();
        }
    }
}
