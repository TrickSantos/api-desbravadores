import { JwtAuthGuard } from '@infra/authentication/guards/jwt.guard';
import { LocalAuthGuard } from '@infra/authentication/guards/local.guard';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { AddMemberToUnitUseCase } from '@useCases/unit/addMember';
import { CreateUnitUseCase } from '@useCases/unit/create';
import { DeleteUnitUseCase } from '@useCases/unit/delete';
import { FindUnitByIdUseCase } from '@useCases/unit/findById';
import { ListAllUnitsUseCase } from '@useCases/unit/listAll';
import { RemoveMemberFromUnitUseCase } from '@useCases/unit/removeMember';
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
        private addMemberToUnit: AddMemberToUnitUseCase,
        private removeMemberFromUnit: RemoveMemberFromUnitUseCase,
    ) {}

    @Get()
    async listAll() {
        const units = await this.listAllUnits.execute();
        return units.map((unit) => unit.toJSON());
    }

    @UseGuards(JwtAuthGuard)
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

    @Post(':id/members/:memberId')
    async addMember(
        @Param('id') id: string,
        @Param('memberId') memberId: string,
    ) {
        await this.addMemberToUnit.execute({
            unitId: id,
            memberId,
        });
    }

    @Delete(':id/members/:memberId')
    async removeMember(
        @Param('id') id: string,
        @Param('memberId') memberId: string,
    ) {
        await this.removeMemberFromUnit.execute({
            unitId: id,
            memberId,
        });
    }
}
