import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

//TypeORM에서 Active Record 사용 원하면
//export class Restaurant extends BaseEntity {} 이런 식으로 작성해야함

@InputType({ isAbstract: true })
@ObjectType() //graphQL을 위한 ObjectType
@Entity() //TypeORM을 위한 Entity
export class Restaurant {
  @Field((type) => Int)
  @PrimaryColumn() // TypeORM PrimayColumn을 넣어줘야 오류 안뜸
  id: number;

  @Field(() => String) //GraphQL
  @Column() //TypeORM
  @IsString() //유효성 검사
  @Length(5)
  name: string;

  @Field(() => Boolean)
  @Column()
  @IsBoolean()
  isVegan?: boolean;

  @Field(() => String)
  @Column()
  @IsString()
  address?: string;

  @Field(() => String)
  @Column()
  @IsString()
  ownerName?: string;

  @Field((type) => String)
  @Column()
  @IsString()
  categoryName: string;
}
