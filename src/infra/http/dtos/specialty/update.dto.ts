import { createZodDto } from '@anatine/zod-nestjs';
import { CreateSpecialtySchema } from './create.dto';

export class UpdateSpecialtyDTO extends createZodDto(
    CreateSpecialtySchema.partial(),
) {}
