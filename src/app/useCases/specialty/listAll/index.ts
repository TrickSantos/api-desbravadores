import { Specialty } from '@domain/entities/user/specialty/specialty';
import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllSpecialtiesUseCase {
    constructor(private placeRepository: SpecialtyRepository) {}

    async execute(): Promise<Specialty[]> {
        return this.placeRepository.findAll();
    }
}
