import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    //Restaurant entity의 repository를 inject
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>, //이름이 restaurant이고 class는 Restaurant entity를 가진 Repository
  ) {}
  //모든 레스토랑을 가져오는 service (실제로 DB에 접근하는 방식)
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find(); //find()는 async method
  }
}
