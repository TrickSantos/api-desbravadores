import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateClassUseCase } from '@useCases/class/create';
import { DeleteClassUseCase } from '@useCases/class/delete';
import { FindClassByIdUseCase } from '@useCases/class/findById';
import { ListAllClassesUseCase } from '@useCases/class/listAll';
import { UpdateClassUseCase } from '@useCases/class/update';
import { CreateClassDTO } from '../dtos/class/create.dto';
import { UpdateClassDTO } from '../dtos/class/update.dto';

@Controller('classes')
export class ClassesController {
    constructor(
        private createClass: CreateClassUseCase,
        private listAllClasses: ListAllClassesUseCase,
        private findByIdClass: FindClassByIdUseCase,
        private updateClass: UpdateClassUseCase,
        private deleteClass: DeleteClassUseCase,
    ) {}

    @Get()
    async listAll() {
        const clubs = await this.listAllClasses.execute();
        return clubs.map((club) => club.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const club = await this.findByIdClass.execute(id);
        return club.toJSON();
    }

    @Post()
    async create(@Body() body: CreateClassDTO) {
        await this.createClass.execute({
            name: body.name,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateClassDTO) {
        await this.updateClass.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteClass.execute(id);
    }
}
