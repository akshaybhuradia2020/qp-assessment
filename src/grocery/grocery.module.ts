import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroceryController } from './grocery.controller'
import { GroceryService } from './grocery.service';
import { Grocery, GrocerySchema } from '../schemas/grocery.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Grocery.name, schema: GrocerySchema}])],
  controllers: [GroceryController],
  providers: [GroceryService],
  exports:[GroceryService]
})
export class GroceryModule {};