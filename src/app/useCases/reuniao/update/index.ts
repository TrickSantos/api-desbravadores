import { ReuniaoRepository } from '@domain/repositories/reuniao.repository';
import { Injectable } from '@nestjs/common';
import { ReuniaoNotFound } from '@useCases/errors/ReuniaoNotFound';

type UpdateReuniaoDTO = {
    id: string;
    clubId?: string;
    name?: string;
    description?: string;
    date?: Date;
    isActive?: boolean;
};

@Injectable()
export class UpdateReuniaoUseCase {
    constructor(private repository: ReuniaoRepository) {}

    async execute(data: UpdateReuniaoDTO) {
        const found = await this.repository.findById(data.id);
        if (found) {
            found.update({
                ...data,
            });
            return this.repository.update(found);
        } else {
            throw new ReuniaoNotFound();
        }
    }
}
