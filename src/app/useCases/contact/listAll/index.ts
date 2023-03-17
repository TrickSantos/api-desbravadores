import { Contact } from '@domain/entities/user/contact/contact';
import { ContactRepository } from '@domain/repositories/contact.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllContactsUseCase {
    constructor(private placeRepository: ContactRepository) {}

    async execute(): Promise<Contact[]> {
        return this.placeRepository.findAll();
    }
}
