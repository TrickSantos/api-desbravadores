import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateContactSchema = z.object({
    userId: z.string({ required_error: 'User ID is required' }).uuid(),
    firstName: z.string({ required_error: 'First name is required' }),
    lastName: z.string({ required_error: 'Last name is required' }),
    email: z.string({ required_error: 'Email is required' }).email(),
    phone: z.string({ required_error: 'Phone is required' }),
});

export class CreateContactDTO extends createZodDto(CreateContactSchema) {}
