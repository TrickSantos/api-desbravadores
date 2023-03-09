import { Class } from '@domain/entities/user/class/class';
import { ClassRepository } from '@domain/repositories/class.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllClassesUseCase {
    constructor(private placeRepository: ClassRepository) {}

    async execute(): Promise<Class[]> {
        return this.placeRepository.findAll();
    }
}
