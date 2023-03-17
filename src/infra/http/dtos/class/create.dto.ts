import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateClassSchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
});

export class CreateClassDTO extends createZodDto(CreateClassSchema) {}
