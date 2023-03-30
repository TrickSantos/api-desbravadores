import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateChallengeSchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    cover: z.string({ required_error: 'Cover is required' }).url(),
    point: z.number({ required_error: 'Point is required' }),
    category: z.enum([
        'PRESENCA',
        'CLASSE',
        'PARTICIPACAO',
        'ESPIRITUALIDADE',
        'SOCIAL',
    ]),
    type: z.enum(['INDIVIDUAL', 'EQUIPE']),
});

export class CreateChallengeDTO extends createZodDto(CreateChallengeSchema) {}
