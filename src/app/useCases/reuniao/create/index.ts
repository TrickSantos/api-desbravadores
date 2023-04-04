import { Reuniao } from '@domain/entities/challenge/presenca/reuniao';
import { ReuniaoRepository } from '@domain/repositories/reuniao.repository';
import { Injectable } from '@nestjs/common';

type CreateReuniaoDTO = {
    clubId: string;
    name: string;
    description: string;
    date: Date;
    isActive: boolean;
};

@Injectable()
export class CreateReuniaoUseCase {
    constructor(private repository: ReuniaoRepository) {}

    async execute(data: CreateReuniaoDTO): Promise<void> {
        const reuniao = new Reuniao(data);

        return this.repository.create(reuniao);
    }
}
