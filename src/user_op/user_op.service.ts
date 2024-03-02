import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import {CreateUserDto} from './user_op.validation';


@Injectable()
export class UserOpService {
    constructor(@InjectModel(User.name) private UserModel: Model<User>){}

    async create(createUserDto: CreateUserDto): Promise<User>{
        const createdUser = new this.UserModel(createUserDto);
        return createdUser.save();  
    };

    async checkuserexist(_data:Object): Promise<Object>{
        const _check = await this.UserModel.findOne(_data);
        
        if(_check) return {"user_id": _check._id, "is_admin":_check.is_admin};
        return {"user_id": null, "is_admin": null};
    };

    async getuserbyid(_id:string): Promise<User[]>{
        return this.UserModel.findById(_id);
    };

    async getalluser(): Promise<User[]>{
        return this.UserModel.find().exec();
    };
}