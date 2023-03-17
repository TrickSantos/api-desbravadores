import { createZodDto } from '@anatine/zod-nestjs';
import { CreateClassSchema } from './create.dto';

export class UpdateClassDTO extends createZodDto(CreateClassSchema.partial()) {}
