import { ContactRepository } from '@domain/repositories/contact.repository';
import { Injectable } from '@nestjs/common';
import { ContactNotFound } from '@useCases/errors/ContactNotFound';

type UpdateContactDTO = {
    id: string;
    userId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
};

@Injectable()
export class UpdateContactUseCase {
    constructor(private repository: ContactRepository) {}

    async execute(data: UpdateContactDTO) {
        const found = await this.repository.findById(data.id);
        if (found) {
            found.update({
                ...data,
            });
            return this.repository.update(found);
        } else {
            throw new ContactNotFound();
        }
    }
}
