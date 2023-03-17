import { ClassRepository } from '@domain/repositories/class.repository';
import { ClubRepository } from '@domain/repositories/club.repository';
import { ContactRepository } from '@domain/repositories/contact.repository';
import { PermissionRepository } from '@domain/repositories/permission.repository';
import { RoleRepository } from '@domain/repositories/role.repository';
import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { Module } from '@nestjs/common';
import { PrismaClassRepository } from './prisma/class.repository';
import { PrismaClubRepository } from './prisma/club.repository';
import { PrismaContactRepository } from './prisma/contact.repository';
import { PrismaPermissionRepository } from './prisma/permission.repository';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaRoleRepository } from './prisma/role.repository';
import { PrismaSpecialtyRepository } from './prisma/specialty.repository';
import { PrismaUnitRepository } from './prisma/unit.repository';
import { PrismaUserRepository } from './prisma/user.repository';

@Module({
    imports: [PrismaModule],
    providers: [
        {
            provide: ClubRepository,
            useClass: PrismaClubRepository,
        },
        {
            provide: UserRepository,
            useClass: PrismaUserRepository,
        },
        {
            provide: UnitRepository,
            useClass: PrismaUnitRepository,
        },
        {
            provide: ClassRepository,
            useClass: PrismaClassRepository,
        },
        {
            provide: PermissionRepository,
            useClass: PrismaPermissionRepository,
        },
        {
            provide: RoleRepository,
            useClass: PrismaRoleRepository,
        },
        {
            provide: SpecialtyRepository,
            useClass: PrismaSpecialtyRepository,
        },
        {
            provide: ContactRepository,
            useClass: PrismaContactRepository,
        },
    ],
    exports: [
        ClubRepository,
        UserRepository,
        UnitRepository,
        ClassRepository,
        RoleRepository,
        PermissionRepository,
        SpecialtyRepository,
        ContactRepository,
    ],
})
export class DatabaseModule {}
