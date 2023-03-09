import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateUnitUseCase } from '@useCases/unit/create';
import { DeleteUnitUseCase } from '@useCases/unit/delete';
import { FindUnitByIdUseCase } from '@useCases/unit/findById';
import { ListAllUnitsUseCase } from '@useCases/unit/listAll';
import { UpdateUnitUseCase } from '@useCases/unit/update';
import { CreateUnitDTO } from '../dtos/unit/create.dto';
import { UpdateUnitDTO } from '../dtos/unit/update.dto';

@Controller('units')
export class UnitsController {
    constructor(
        private createUnit: CreateUnitUseCase,
        private listAllUnits: ListAllUnitsUseCase,
        private findUnitById: FindUnitByIdUseCase,
        private updateUnit: UpdateUnitUseCase,
        private deleteUnit: DeleteUnitUseCase,
    ) {}

    @Get()
    async listAll() {
        const units = await this.listAllUnits.execute();
        return units.map((unit) => unit.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const unit = await this.findUnitById.execute(id);
        return unit.toJSON();
    }

    @Post()
    async create(@Body() body: CreateUnitDTO) {
        await this.createUnit.execute({
            clubId: body.clubId,
            logo: body.logo,
            name: body.name,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateUnitDTO) {
        await this.updateUnit.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteUnit.execute(id);
    }
}
