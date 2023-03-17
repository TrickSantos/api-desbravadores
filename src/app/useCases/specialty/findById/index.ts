import { Specialty } from '@domain/entities/user/specialty/specialty';
import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { Injectable } from '@nestjs/common';
import { SpecialtyNotFound } from '@useCases/errors/SpecialtyNotFound';

@Injectable()
export class FindSpecialtyByIdUseCase {
    constructor(private readonly repository: SpecialtyRepository) {}

    async execute(id: string): Promise<Specialty> {
        const found = await this.repository.findById(id);
        if (found) {
            return found;
        } else {
            throw new SpecialtyNotFound();
        }
    }
}
