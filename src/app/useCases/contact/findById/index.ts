import { Contact } from '@domain/entities/user/contact/contact';
import { ContactRepository } from '@domain/repositories/contact.repository';
import { Injectable } from '@nestjs/common';
import { ContactNotFound } from '@useCases/errors/ContactNotFound';

@Injectable()
export class FindContactByIdUseCase {
    constructor(private readonly repository: ContactRepository) {}

    async execute(id: string): Promise<Contact> {
        const found = await this.repository.findById(id);
        if (found) {
            return found;
        } else {
            throw new ContactNotFound();
        }
    }
}
