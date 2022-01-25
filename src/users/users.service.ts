import { Injectable } from '@nestjs/common';
import { CreateUserInput, User } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<Users>){}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<Users[]>  {
    return await this.userModel.find().exec();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
