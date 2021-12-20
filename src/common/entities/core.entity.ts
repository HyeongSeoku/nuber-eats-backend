import { PrimaryGeneratedColumn } from 'typeorm';

//app 에서 공유하는 모든 것들 = commonModule

export class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
