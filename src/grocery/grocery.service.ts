import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grocery } from './grocery.entity';


@Injectable()
export class GroceryService {
  constructor(@InjectRepository(Grocery) private GroceryModel: Repository<Grocery>) {}

  async create(createGrocery: Grocery): Promise<Grocery> {
    return await this.GroceryModel.save(createGrocery);
  }

  async getall(): Promise<Grocery[]> {
    return await this.GroceryModel.find();
  }

  async getone(_id: string):Promise<Grocery>{
    return await this.GroceryModel.findOneBy({id:_id});
  }
  async update(_id: string, _data: any): Promise<any> {
    return await this.GroceryModel.update(_id , _data);
  }

  async delete(_id: string) {
    return await this.GroceryModel.delete(_id);
  }
}