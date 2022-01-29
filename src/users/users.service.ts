import { Injectable } from '@nestjs/common';
import { CreateUserInput, User } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<Users>){}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const createdUser = new this.userModel(createUserInput);
    return await createdUser.save();
  }

  async findAll(): Promise<Users[]>  {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput, {new: true}).exec();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
