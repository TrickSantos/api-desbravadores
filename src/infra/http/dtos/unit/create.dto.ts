import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateUnitSchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
    logo: z.string({ required_error: 'Logo is required' }).url({
        message: 'Logo must be a valid url',
    }),
    clubId: z.string().uuid({ message: 'Club id is required' }),
});

export class CreateUnitDTO extends createZodDto(CreateUnitSchema) {}
