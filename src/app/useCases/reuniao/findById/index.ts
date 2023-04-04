import { Reuniao } from '@domain/entities/challenge/presenca/reuniao';
import { ReuniaoRepository } from '@domain/repositories/reuniao.repository';
import { Injectable } from '@nestjs/common';
import { ReuniaoNotFound } from '@useCases/errors/ReuniaoNotFound';

@Injectable()
export class FindReuniaoByIdUseCase {
    constructor(private readonly repository: ReuniaoRepository) {}

    async execute(id: string): Promise<Reuniao> {
        const found = await this.repository.findById(id);
        if (found) {
            return found;
        } else {
            throw new ReuniaoNotFound();
        }
    }
}
