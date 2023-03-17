import { createZodDto } from '@anatine/zod-nestjs';
import { CreateRoleSchema } from './create.dto';

export class UpdateRoleDTO extends createZodDto(CreateRoleSchema.partial()) {}
