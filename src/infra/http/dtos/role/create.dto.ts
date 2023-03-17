import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateRoleSchema = z.object({
    name: z.string({ required_error: 'First name is required' }),
});

export class CreateRoleDTO extends createZodDto(CreateRoleSchema) {}
