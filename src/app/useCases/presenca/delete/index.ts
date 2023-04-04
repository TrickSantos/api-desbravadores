import { PresencaRepository } from '@domain/repositories/presenca.repository';
import { Injectable } from '@nestjs/common';
import { PresencaNotFound } from '@useCases/errors/PresencaNotFound';

@Injectable()
export class DeletePresencaUseCase {
    constructor(private repository: PresencaRepository) {}

    async execute(id: string) {
        const presenca = await this.repository.findById(id);
        if (presenca) {
            return this.repository.delete(id);
        } else {
            throw new PresencaNotFound();
        }
    }
}
