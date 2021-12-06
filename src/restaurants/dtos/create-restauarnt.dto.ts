import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

//InputType = 하나의 Object argument로써 graphql에 전달하기 위한 용도
//ArgsType =  분리된 값들을 GraphQL argument로 전달할 수 있도록 함

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString() //유효성 검사 부분
  @Length(5, 10) //길이 유효성 (최소,최대)  (validation-pipeline생성 안하면 작동 X)
  name: string;

  @Field(() => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  ownerName: string;
}
