import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    try {
      //check new User
      const exists = await this.users.findOne({ email });
      //not new User
      if (exists) {
        //에러를 Throw하지 않고 바로 return
        return 'There is a user with that email already';
      }
      //create user & hash the password
      await this.users.save(this.users.create({ email, password, role }));
    } catch (e) {
      //make error
      return "Couldn't create account";
    }
  }
}
