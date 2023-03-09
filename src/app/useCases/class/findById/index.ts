import { Class } from '@domain/entities/user/class/class';
import { ClassRepository } from '@domain/repositories/class.repository';
import { Injectable } from '@nestjs/common';
import { ClassNotFound } from '@useCases/errors/ClassNotFound';

@Injectable()
export class FindClassByIdUseCase {
    constructor(private readonly categoryRepository: ClassRepository) {}

    async execute(id: string): Promise<Class> {
        const found = await this.categoryRepository.findById(id);
        if (found) {
            return found;
        } else {
            throw new ClassNotFound();
        }
    }
}
