import { Presenca } from '@domain/entities/challenge/presenca/presenca';
import { PresencaRepository } from '@domain/repositories/presenca.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllPresencasUseCase {
    constructor(private placeRepository: PresencaRepository) {}

    async execute(): Promise<Presenca[]> {
        return this.placeRepository.findAll();
    }
}
