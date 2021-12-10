import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

//TypeORM에서 Active Record 사용 원하면
//export class Restaurant extends BaseEntity {} 이런 식으로 작성해야함

@InputType({ isAbstract: true })
@ObjectType() //graphQL을 위한 ObjectType
@Entity() //TypeORM을 위한 Entity
export class Restaurant {
  @Field(() => Int)
  @PrimaryGeneratedColumn() // TypeORM PrimaryGeneratedColumn 넣어줘야 오류 안뜸 (자동 생성)
  id: number;

  @Field(() => String) //GraphQL
  @Column() //TypeORM
  @IsString() //유효성 검사
  @Length(5)
  name: string;

  @Field(() => Boolean, { defaultValue: true }) //GraphQL을 위해서, 입력되지 않으면 true 값 field에 입력 (nullable 사용해도됨 )
  @Column({ default: true }) //DB를 위해서, 입력되지 않으면 true 값 DB에 입력
  @IsOptional() //GraphQL에서 필수적으로 입력해주지 않아도됨
  @IsBoolean()
  isVegan?: boolean;

  @Field(() => String, { defaultValue: '강남' })
  @Column({ default: '강남' })
  @IsOptional()
  @IsString()
  address?: string;
}
