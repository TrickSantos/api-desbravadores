import { ChallengeRepository } from '@domain/repositories/challenge.repository';
import { ClassRepository } from '@domain/repositories/class.repository';
import { ClubRepository } from '@domain/repositories/club.repository';
import { ContactRepository } from '@domain/repositories/contact.repository';
import { PermissionRepository } from '@domain/repositories/permission.repository';
import { ReuniaoRepository } from '@domain/repositories/reuniao.repository';
import { RoleRepository } from '@domain/repositories/role.repository';
import { SpecialtyRepository } from '@domain/repositories/specialty.repository';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { ChallengeUnitRepository } from '@domain/repositories/unitChallenge.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { ChallengeUserRepository } from '@domain/repositories/userChallenge.repository';
import { Module } from '@nestjs/common';
import { PrismaChallengeRepository } from './prisma/challenge.repository';
import { PrismaChallengeUnitRepository } from './prisma/challengeUnit.repository';
import { PrismaChallengeUserRepository } from './prisma/challengeUser.repository';
import { PrismaClassRepository } from './prisma/class.repository';
import { PrismaClubRepository } from './prisma/club.repository';
import { PrismaContactRepository } from './prisma/contact.repository';
import { PrismaPermissionRepository } from './prisma/permission.repository';
import { PrismaModule } from './prisma/prisma.module';
import { ReuniaoPrismaRepository } from './prisma/reuniao.repository';
import { PrismaRoleRepository } from './prisma/role.repository';
import { PrismaSpecialtyRepository } from './prisma/specialty.repository';
import { PrismaUnitRepository } from './prisma/unit.repository';
import { PrismaUserRepository } from './prisma/user.repository';
import { PresencaRepository } from '@domain/repositories/presenca.repository';
import { PresencaPrismaRepository } from './prisma/presenca.repository';

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
        {
            provide: ChallengeRepository,
            useClass: PrismaChallengeRepository,
        },
        {
            provide: ChallengeUnitRepository,
            useClass: PrismaChallengeUnitRepository,
        },
        {
            provide: ChallengeUserRepository,
            useClass: PrismaChallengeUserRepository,
        },
        {
            provide: ReuniaoRepository,
            useClass: ReuniaoPrismaRepository,
        },
        {
            provide: PresencaRepository,
            useClass: PresencaPrismaRepository,
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
        ChallengeRepository,
        ChallengeUnitRepository,
        ChallengeUserRepository,
        ReuniaoRepository,
        PresencaRepository,
    ],
})
export class DatabaseModule {}
