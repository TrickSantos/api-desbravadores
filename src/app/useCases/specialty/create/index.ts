import { Specialty } from '@domain/entities/user/specialty/specialty';
import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { Injectable } from '@nestjs/common';

type CreateSpecialtyDTO = {
    name: string;
    category: string;
};

@Injectable()
export class CreateSpecialtyUseCase {
    constructor(private repository: SpecialtyRepository) {}

    async execute(data: CreateSpecialtyDTO): Promise<void> {
        const category = new Specialty(data);

        return this.repository.create(category);
    }
}
