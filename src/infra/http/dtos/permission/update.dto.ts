import { createZodDto } from '@anatine/zod-nestjs';
import { CreatePermissionSchema } from './create.dto';

export class UpdatePermissionDTO extends createZodDto(
    CreatePermissionSchema.partial(),
) {}
