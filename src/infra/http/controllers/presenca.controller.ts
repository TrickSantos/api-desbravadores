import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreatePresencaUseCase } from '@useCases/presenca/create';
import { DeletePresencaUseCase } from '@useCases/presenca/delete';
import { FindPresencaByIdUseCase } from '@useCases/presenca/findById';
import { ListAllPresencasUseCase } from '@useCases/presenca/listAll';
import { UpdatePresencaUseCase } from '@useCases/presenca/update';
import { CreatePresencaDTO } from '../dtos/presenca/create.dto';
import { UpdatePresencaDTO } from '../dtos/presenca/update.dto';

@Controller('presencas')
export class PresencasController {
    constructor(
        private createPresenca: CreatePresencaUseCase,
        private listAllPresencas: ListAllPresencasUseCase,
        private findByIdPresenca: FindPresencaByIdUseCase,
        private updatePresenca: UpdatePresencaUseCase,
        private deletePresenca: DeletePresencaUseCase,
    ) {}

    @Get()
    async listAll() {
        const presencas = await this.listAllPresencas.execute();
        return presencas.map((presenca) => presenca.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const presenca = await this.findByIdPresenca.execute(id);
        return presenca.toJSON();
    }

    @Post()
    async create(@Body() body: CreatePresencaDTO) {
        await this.createPresenca.execute({
            userId: body.userId,
            reunionId: body.reunionId,
            date: new Date(),
            potualidade: body.potualidade,
            biblia: body.biblia,
            caderno: body.caderno,
            lenco: body.lenco,
            vestuario: body.vestuario,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdatePresencaDTO) {
        await this.updatePresenca.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deletePresenca.execute(id);
    }
}
