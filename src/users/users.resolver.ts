import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  //import 시 꼭 @nestjs/graphql의 Query인지 확인
  @Query(() => Boolean)
  hello() {
    return true;
  }
}
