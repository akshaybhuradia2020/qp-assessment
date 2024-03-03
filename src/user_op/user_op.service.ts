import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user_op.entity';



@Injectable()
export class UserOpService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

    async create(createUserDto: User): Promise<User>{
        return await this.usersRepository.save(createUserDto);
    };

    async checkuserexist(_data:Object): Promise<Object>{
        const _check = await this.usersRepository.findOneBy(_data);
        
        if(_check) return {"user_id": _check.id, "is_admin":_check.is_admin};
        return {"user_id": null, "is_admin": null};
    };

    async getuserbyid(_id:string): Promise<User>{
        return await this.usersRepository.findOneBy({id: _id});
    };

    async getalluser(): Promise<User[]>{
        return this.usersRepository.find();
    };
}