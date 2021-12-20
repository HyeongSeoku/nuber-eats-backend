import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

//app 에서 공유하는 모든 것들 = commonModule

export class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //날짜 관련 typeORM
  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
