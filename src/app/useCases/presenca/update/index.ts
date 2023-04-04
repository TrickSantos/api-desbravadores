import { PresencaRepository } from '@domain/repositories/presenca.repository';
import { Injectable } from '@nestjs/common';
import { PresencaNotFound } from '@useCases/errors/PresencaNotFound';

type UpdatePresencaDTO = {
    id: string;
    userId?: string;
    date?: Date;
    potualidade?: boolean;
    biblia?: boolean;
    caderno?: boolean;
    lenco?: boolean;
    vestuario?: boolean;
};

@Injectable()
export class UpdatePresencaUseCase {
    constructor(private repository: PresencaRepository) {}

    async execute(data: UpdatePresencaDTO) {
        const found = await this.repository.findById(data.id);
        if (found) {
            found.update({
                ...data,
            });
            return this.repository.update(found);
        } else {
            throw new PresencaNotFound();
        }
    }
}
