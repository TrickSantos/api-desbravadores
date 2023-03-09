import { ClassRepository } from '@domain/repositories/class.repository';
import { Injectable } from '@nestjs/common';
import { ClassNotFound } from '@useCases/errors/ClassNotFound';

type UpdateClassDTO = {
    id: string;
    name?: string;
};

@Injectable()
export class UpdateClassUseCase {
    constructor(private repository: ClassRepository) {}

    async execute(data: UpdateClassDTO) {
        const found = await this.repository.findById(data.id);
        if (found) {
            found.update({
                ...data,
            });
            return this.repository.update(found);
        } else {
            throw new ClassNotFound();
        }
    }
}
