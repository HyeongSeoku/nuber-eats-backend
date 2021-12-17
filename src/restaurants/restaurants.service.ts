import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restauarnt.dto';
import { UpdateRestaruantDto } from './dtos/updaet-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    //Restaurant entity의 repository를 inject
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>, //이름이 restaurant이고 class는 Restaurant entity를 가진 Repository
  ) {}
  //모든 레스토랑을 가져오는 메소드 (실제로 DB에 접근하는 방식)
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find(); //find()는 async method
  }
  createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const newRestaurant = this.restaurants.create(createRestaurantDto); //생성. js에만 생성돼있고 DB상 저장 안되어있음
    return this.restaurants.save(newRestaurant); //DB에 저장 (Promise 필요)
  }

  //수정하는 메소드
  updateRestaurant({ id, data }: UpdateRestaruantDto) {
    return this.restaurants.update(id, { ...data }); //update(찾으려는 대상,변경하려는 내용) ex)update({name:"blabla"},{...data})
  }
}
