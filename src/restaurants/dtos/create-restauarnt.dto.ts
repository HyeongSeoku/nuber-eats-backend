import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
//Restaurant entity에서 id만 빼고 가져옴
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
