import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateSpecialtyUseCase } from '@useCases/specialty/create';
import { DeleteSpecialtyUseCase } from '@useCases/specialty/delete';
import { FindSpecialtyByIdUseCase } from '@useCases/specialty/findById';
import { ListAllSpecialtiesUseCase } from '@useCases/specialty/listAll';
import { UpdateSpecialtyUseCase } from '@useCases/specialty/update';
import { CreateSpecialtyDTO } from '../dtos/specialty/create.dto';
import { UpdateSpecialtyDTO } from '../dtos/specialty/update.dto';

@Controller('specialties')
export class SpecialtiesController {
    constructor(
        private createSpecialty: CreateSpecialtyUseCase,
        private listAllSpecialtys: ListAllSpecialtiesUseCase,
        private findByIdSpecialty: FindSpecialtyByIdUseCase,
        private updateSpecialty: UpdateSpecialtyUseCase,
        private deleteSpecialty: DeleteSpecialtyUseCase,
    ) {}

    @Get()
    async listAll() {
        const clubs = await this.listAllSpecialtys.execute();
        return clubs.map((club) => club.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const club = await this.findByIdSpecialty.execute(id);
        return club.toJSON();
    }

    @Post()
    async create(@Body() body: CreateSpecialtyDTO) {
        await this.createSpecialty.execute({
            category: body.category,
            name: body.name,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateSpecialtyDTO) {
        await this.updateSpecialty.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteSpecialty.execute(id);
    }
}
