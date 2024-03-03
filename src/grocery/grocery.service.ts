import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Grocery} from '../schemas/grocery.schema';
import { CreateGroceryDto } from './grocery.validation';


@Injectable()
export class GroceryService {
  constructor(@InjectModel(Grocery.name) private GroceryModel: Model<Grocery>) {}

  async create(createGroceryDto: CreateGroceryDto): Promise<Grocery> {
    const createdGrosery = new this.GroceryModel(createGroceryDto);
    return createdGrosery.save();
  }

  async getall(): Promise<Grocery[]> {
    return this.GroceryModel.find().exec();
  }

  async getone(_id: string):Promise<Grocery[]>{
    return this.GroceryModel.findById(_id);
  }
  async update(_id: string, _data: any): Promise<Grocery> {
    return this.GroceryModel.findByIdAndUpdate(_id, _data);
  }

  async delete(_id: string) {
    return this.GroceryModel.findByIdAndDelete(_id);
  }
}