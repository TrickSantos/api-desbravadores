import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateReuniaoUseCase } from '@useCases/reuniao/create';
import { DeleteReuniaoUseCase } from '@useCases/reuniao/delete';
import { FindReuniaoByIdUseCase } from '@useCases/reuniao/findById';
import { ListAllReuniaoUseCase } from '@useCases/reuniao/listAll';
import { UpdateReuniaoUseCase } from '@useCases/reuniao/update';
import { CreateReuniaoDTO } from '../dtos/reuniao/create.dto';
import { UpdateReuniaoDTO } from '../dtos/reuniao/update.dto';

@Controller('reuniao')
export class ReuniaoController {
    constructor(
        private createReuniao: CreateReuniaoUseCase,
        private listAllReuniao: ListAllReuniaoUseCase,
        private findByIdReuniao: FindReuniaoByIdUseCase,
        private updateReuniao: UpdateReuniaoUseCase,
        private deleteReuniao: DeleteReuniaoUseCase,
    ) {}

    @Get()
    async listAll() {
        const reunioes = await this.listAllReuniao.execute();
        return reunioes.map((reuniao) => reuniao.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const club = await this.findByIdReuniao.execute(id);
        return club.toJSON();
    }

    @Post()
    async create(@Body() body: CreateReuniaoDTO) {
        await this.createReuniao.execute({
            clubId: body.clubId,
            name: body.name,
            date: body.date,
            description: body.description,
            isActive: true,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateReuniaoDTO) {
        await this.updateReuniao.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteReuniao.execute(id);
    }
}
