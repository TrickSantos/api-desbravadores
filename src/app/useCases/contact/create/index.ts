import { Contact } from '@domain/entities/user/contact/contact';
import { ContactRepository } from '@domain/repositories/contact.repository';
import { Injectable } from '@nestjs/common';

type CreateContactDTO = {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

@Injectable()
export class CreateContactUseCase {
    constructor(private repository: ContactRepository) {}

    async execute(data: CreateContactDTO): Promise<void> {
        const category = new Contact(data);

        return this.repository.create(category);
    }
}
