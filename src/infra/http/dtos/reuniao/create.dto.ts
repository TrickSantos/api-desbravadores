import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateReuniaoSchema = z.object({
    clubId: z.string({ required_error: 'ClubId is required' }),
    name: z.string({ required_error: 'Name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    date: z
        .string({ required_error: 'date is required' })
        .transform((value) => new Date(value)),
});

export class CreateReuniaoDTO extends createZodDto(CreateReuniaoSchema) {}
