import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { GroceryModule } from 'src/grocery/grocery.module';
import { Order, OrderedGrocery } from './order.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderedGrocery]),GroceryModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {};