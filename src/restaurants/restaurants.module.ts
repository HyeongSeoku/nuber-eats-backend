import { Module } from '@nestjs/common';
import { RestaurantsResolver } from './restaurants.resolver';

@Module({
  //resolver 필요
  providers: [RestaurantsResolver],
})
export class RestaurantsModule {}
