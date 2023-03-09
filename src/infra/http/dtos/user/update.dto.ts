import { createZodDto } from '@anatine/zod-nestjs';
import { CreateUserSchema } from './create.dto';

export class UpdateUserDto extends createZodDto(CreateUserSchema.partial()) {}
