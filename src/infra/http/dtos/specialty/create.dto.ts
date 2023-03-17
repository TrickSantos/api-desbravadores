import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateSpecialtySchema = z.object({
    name: z.string({ required_error: 'First name is required' }),
    category: z.string({ required_error: 'Category is required' }),
});

export class CreateSpecialtyDTO extends createZodDto(CreateSpecialtySchema) {}
