import { Class } from '@domain/entities/user/class/class';
import { ClassRepository } from '@domain/repositories/class.repository';
import { Injectable } from '@nestjs/common';

type CreateClassDTO = {
    name: string;
};

@Injectable()
export class CreateClassUseCase {
    constructor(private repository: ClassRepository) {}

    async execute(data: CreateClassDTO): Promise<void> {
        const category = new Class(data);

        return this.repository.create(category);
    }
}
