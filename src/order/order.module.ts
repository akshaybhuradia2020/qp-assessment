import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrderSchema } from 'src/schemas/order.schema';
import { GroceryModule } from 'src/grocery/grocery.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}]), GroceryModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {};