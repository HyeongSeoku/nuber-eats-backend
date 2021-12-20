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

  async createAccount({ email, password, role }: CreateAccountInput) {
    try {
      //check new User
      const exists = await this.users.findOne({ email });
      //not new User
      if (exists) {
        //make error
        return;
      }
      //create user & hash the password
      await this.users.save(this.users.create({ email, password, role }));
      return true;
    } catch (e) {
      //make error
      return;
    }
  }
}
