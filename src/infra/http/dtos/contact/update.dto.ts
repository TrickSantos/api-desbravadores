import { createZodDto } from '@anatine/zod-nestjs';
import { CreateContactSchema } from './create.dto';

export class UpdateContactDTO extends createZodDto(
    CreateContactSchema.partial(),
) {}
