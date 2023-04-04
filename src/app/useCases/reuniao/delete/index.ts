import { ReuniaoRepository } from '@domain/repositories/reuniao.repository';
import { Injectable } from '@nestjs/common';
import { ReuniaoNotFound } from '@useCases/errors/ReuniaoNotFound';

@Injectable()
export class DeleteReuniaoUseCase {
    constructor(private repository: ReuniaoRepository) {}

    async execute(id: string) {
        const reuniao = await this.repository.findById(id);
        if (reuniao) {
            return this.repository.delete(id);
        } else {
            throw new ReuniaoNotFound();
        }
    }
}
