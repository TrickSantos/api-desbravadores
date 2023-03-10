import { Contact } from '@domain/entities/user/contact/contact';
import { ContactRepository } from '@domain/repositories/contact.repository';
import { PrismaService } from './prisma.service';
import { Contact as PrismaContact } from '@prisma/client';

export class PrismaContactRepository implements ContactRepository {
    constructor(private prisma: PrismaService) {}

    toClass(contact: PrismaContact) {
        return new Contact(
            {
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                phone: contact.phone,
                userId: contact.userId,
            },
            contact.id,
        );
    }

    async create(contact: Contact): Promise<void> {
        await this.prisma.contact.create({
            data: {
                id: contact.id,
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                phone: contact.phone,
                userId: contact.userId,
            },
        });
    }

    async update(contact: Contact): Promise<void> {
        await this.prisma.contact.update({
            where: { id: contact.id },
            data: {
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                phone: contact.phone,
                userId: contact.userId,
            },
        });
    }

    async delete(contact: Contact): Promise<void> {
        await this.prisma.contact.delete({
            where: { id: contact.id },
        });
    }

    async findById(id: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
            where: { id },
        });
        return this.toClass(contact);
    }

    async findAll(): Promise<Contact[]> {
        const contacts = await this.prisma.contact.findMany();
        return contacts.map((contact) => this.toClass(contact));
    }
}
