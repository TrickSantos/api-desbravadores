import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const CreateClubSchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
    logo: z
        .string({ required_error: 'Logo is required' })
        .url({ message: 'Logo must be a valid URL' }),
    association: z.string({ required_error: 'Association is required' }),
    city: z.string({ required_error: 'City is required' }),
    fundation: z.date({ required_error: 'Fundation is required' }),
    state: z.string({ required_error: 'State is required' }),
});

export class CreateClubDTO extends createZodDto(CreateClubSchema) {}
