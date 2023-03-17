import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { Injectable } from '@nestjs/common';
import { SpecialtyNotFound } from '@useCases/errors/SpecialtyNotFound';

@Injectable()
export class DeleteSpecialtyUseCase {
    constructor(private repository: SpecialtyRepository) {}

    async execute(id: string) {
        const place = await this.repository.findById(id);
        if (place) {
            return this.repository.delete(id);
        } else {
            throw new SpecialtyNotFound();
        }
    }
}
