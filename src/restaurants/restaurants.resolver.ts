import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooleanValueNode } from 'graphql';
import { CreateRestaurantDto } from './dtos/create-restauarnt.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';
//Query nestjs/graphql 인지 꼭 확인

@Resolver((of) => Restaurant) //(of) => Restaurant : 필수는 아님
export class RestaurantsResolver {
  //RestaurantService import
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query((returns) => [Restaurant]) //GraphQL의 방식 : [Restaurant]
  restaurant(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation((returns) => Boolean)
  createRestaurant(
    @Args() createRestaurantInput: CreateRestaurantDto,
  ): boolean {
    return true;
  }
}
