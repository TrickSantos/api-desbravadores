import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreatePresencaSchema = z.object({
    userId: z.string(),
    reunionId: z.string(),
    potualidade: z.boolean(),
    biblia: z.boolean(),
    caderno: z.boolean(),
    lenco: z.boolean(),
    vestuario: z.boolean(),
});

export class CreatePresencaDTO extends createZodDto(CreatePresencaSchema) {}
