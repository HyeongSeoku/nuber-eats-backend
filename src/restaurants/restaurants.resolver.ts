import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooleanValueNode } from 'graphql';
import { CreateRestaurantDto } from './dtos/create-restauarnt.dto';
import { UpdateRestaruantDto } from './dtos/updaet-restaurant.dto';
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
  async createRestaurant(
    //dto type이 InputType 이므로 @Args('input')
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurantDto); //async 와 Promise필요
      console.log(createRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  //update하는 Mutation
  @Mutation(() => Boolean)
  //ArgsType 쓰면 @Args() 괄호안에 아무것도 안넣어줘도 됨
  async updateRestaurant(
    @Args('input') updateRestaruantDto: UpdateRestaruantDto,
  ) {
    return true;
  }
}
