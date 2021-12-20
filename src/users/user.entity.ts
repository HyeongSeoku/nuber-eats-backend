import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

//타입 지정
type UserRole = 'client' | 'owner' | 'deilvery';

@Entity()
export class User extends CoreEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole; //타입 지정된 UserRole 사용
}
