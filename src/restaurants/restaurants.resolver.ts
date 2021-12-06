import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooleanValueNode } from 'graphql';
import { CreateRestaurantDto } from './dtos/create-restauarnt.dto';
import { Restaurant } from './entities/restaurant.entity';
//Query nestjs/graphql 인지 꼭 확인

@Resolver((of) => Restaurant) //(of) => Restaurant : 필수는 아님
export class RestaurantsResolver {
  @Query((returns) => [Restaurant]) //GraphQL의 방식 : [Restaurant]
  restaurant(@Args('veganOnly') veganOnly: string): Restaurant[] {
    console.log(typeof veganOnly);
    return [];
  }

  @Mutation((returns) => Boolean)
  createRestaurant(
    @Args() createRestaurantInput: CreateRestaurantDto,
  ): boolean {
    console.log(createRestaurantInput);
    return true;
  }
}
