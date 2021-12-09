import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  //entity가 여러개면 forFeature([one,two,three]) 여러개 작성
  imports: [TypeOrmModule.forFeature([Restaurant])], //엔티티 import
  //resolver,Service 필요
  providers: [RestaurantsResolver, RestaurantService],
})
export class RestaurantsModule {}
