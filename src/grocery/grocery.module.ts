import { Module } from '@nestjs/common';
import { GroceryController } from './grocery.controller'
import { Grocery } from './grocery.entity';
import { GroceryService } from './grocery.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Grocery])],
  controllers: [GroceryController],
  providers: [GroceryService],
  exports: [GroceryService]
})
export class GroceryModule {};