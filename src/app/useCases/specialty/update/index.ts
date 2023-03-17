import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { Injectable } from '@nestjs/common';
import { SpecialtyNotFound } from '@useCases/errors/SpecialtyNotFound';

type UpdateSpecialtyDTO = {
    id: string;
    name?: string;
    category?: string;
};

@Injectable()
export class UpdateSpecialtyUseCase {
    constructor(private repository: SpecialtyRepository) {}

    async execute(data: UpdateSpecialtyDTO) {
        const found = await this.repository.findById(data.id);
        if (found) {
            found.update({
                ...data,
            });
            return this.repository.update(found);
        } else {
            throw new SpecialtyNotFound();
        }
    }
}
