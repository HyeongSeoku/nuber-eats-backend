import { Field } from '@nestjs/graphql';
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

//app 에서 공유하는 모든 것들 = commonModule

export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  //날짜 관련 typeORM
  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @CreateDateColumn()
  @Field(() => Date)
  updatedAt: Date;
}
