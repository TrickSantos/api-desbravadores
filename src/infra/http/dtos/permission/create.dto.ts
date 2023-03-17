import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreatePermissionSchema = z.object({
    name: z.string({ required_error: 'First name is required' }),
});

export class CreatePermissionDTO extends createZodDto(CreatePermissionSchema) {}
