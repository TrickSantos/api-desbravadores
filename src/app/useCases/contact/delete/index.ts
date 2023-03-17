import { ContactRepository } from '@domain/repositories/contact.repository';
import { Injectable } from '@nestjs/common';
import { ContactNotFound } from '@useCases/errors/ContactNotFound';

@Injectable()
export class DeleteContactUseCase {
    constructor(private repository: ContactRepository) {}

    async execute(id: string) {
        const place = await this.repository.findById(id);
        if (place) {
            return this.repository.delete(id);
        } else {
            throw new ContactNotFound();
        }
    }
}
