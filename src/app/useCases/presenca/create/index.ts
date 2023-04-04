import { Presenca } from '@domain/entities/challenge/presenca/presenca';
import { PresencaRepository } from '@domain/repositories/presenca.repository';
import { Injectable } from '@nestjs/common';

type CreatePresencaDTO = {
    userId: string;
    reunionId: string;
    date: Date;
    potualidade: boolean;
    biblia: boolean;
    caderno: boolean;
    lenco: boolean;
    vestuario: boolean;
};

@Injectable()
export class CreatePresencaUseCase {
    constructor(private repository: PresencaRepository) {}

    async execute(data: CreatePresencaDTO): Promise<void> {
        const presenca = new Presenca(data);

        return this.repository.create(presenca);
    }
}
