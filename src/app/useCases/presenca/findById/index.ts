import { Presenca } from '@domain/entities/challenge/presenca/presenca';
import { PresencaRepository } from '@domain/repositories/presenca.repository';
import { Injectable } from '@nestjs/common';
import { PresencaNotFound } from '@useCases/errors/PresencaNotFound';

@Injectable()
export class FindPresencaByIdUseCase {
    constructor(private readonly categoryRepository: PresencaRepository) {}

    async execute(id: string): Promise<Presenca> {
        const found = await this.categoryRepository.findById(id);
        if (found) {
            return found;
        } else {
            throw new PresencaNotFound();
        }
    }
}
