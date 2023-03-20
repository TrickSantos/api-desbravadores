import { Unit } from '@domain/entities/unit/unit';

type AddMemberDTO = {
    unitId: string;
    memberId: string;
};
export abstract class UnitRepository {
    abstract create(unit: Unit): Promise<void>;
    abstract update(unit: Unit): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Unit>;
    abstract findAll(): Promise<Unit[]>;
    abstract addMember(payload: AddMemberDTO): Promise<void>;
    abstract removeMember(payload: AddMemberDTO): Promise<void>;
}
