import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateUserSchema = z.object({
    clubId: z.string().uuid({ message: 'Club id is required' }),
    name: z.string({ required_error: 'Name is required' }),
    password: z.string({ required_error: 'Password is required' }),
    email: z.string().email({ message: 'Email is required' }),
    birthday: z.date({ required_error: 'Birthday is required' }),
    gender: z.enum(['MASCULINO', 'FEMININO'], {
        required_error: 'Gender is required',
    }),
});

export class CreateUserDTO extends createZodDto(CreateUserSchema) {}
