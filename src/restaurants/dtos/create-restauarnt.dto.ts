import { ArgsType, Field, InputType } from '@nestjs/graphql';

//InputType = 하나의 Object argument로써 graphql에 전달하기 위한 용도
//ArgsType =  분리된 값들을 GraphQL argument로 전달할 수 있도록 함

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isVegan: boolean;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownerName: string;
}
