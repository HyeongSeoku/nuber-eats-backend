import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

//TypeORM에서 Active Record 사용 원하면
//export class Restaurant extends BaseEntity {} 이런 식으로 작성해야함

@ObjectType() //graphQL을 위한 ObjectType
@Entity() //TypeORM을 위한 Entity
export class Restaurant {
  @Field((type) => Int)
  @PrimaryColumn() // TypeORM PrimayColumn을 넣어줘야 오류 안뜸
  id: number;

  @Field(() => String) //GraphQL
  @Column() //TypeORM
  name: string;

  @Field(() => Boolean)
  @Column()
  isVegan?: boolean;

  @Field(() => String)
  @Column()
  address?: string;

  @Field(() => String)
  @Column()
  ownerName?: string;

  @Field((type) => String)
  @Column()
  categoryName: string;
}
