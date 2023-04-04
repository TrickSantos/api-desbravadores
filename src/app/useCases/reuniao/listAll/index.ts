import { Reuniao } from '@domain/entities/challenge/presenca/reuniao';
import { ReuniaoRepository } from '@domain/repositories/reuniao.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllReuniaoUseCase {
    constructor(private repository: ReuniaoRepository) {}

    async execute(): Promise<Reuniao[]> {
        return this.repository.findAll();
    }
}
