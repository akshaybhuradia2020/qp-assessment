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

  async findAll(): Promise<Grocery[]> {
    return this.GroceryModel.find().exec();
  }

  async findOne(_id: string):Promise<Grocery[]>{
    return this.GroceryModel.findById(_id);
  }
  async update(_id: string, createGroceryDto: CreateGroceryDto): Promise<Grocery> {
    return this.GroceryModel.findByIdAndUpdate(_id, createGroceryDto);
  }

  async delete(_id: string) {
    return this.GroceryModel.findByIdAndDelete(_id);
  }
}