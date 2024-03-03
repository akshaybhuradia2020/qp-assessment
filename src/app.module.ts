import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryModule } from './grocery/grocery.module';
import { UserOpModule } from './user_op/user_op.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user_op/user_op.entity';
import { Grocery } from './grocery/grocery.entity';
import { Order, OrderedGrocery } from './order/order.entity';

@Module({
  imports: [UserOpModule ,AuthModule, GroceryModule, OrderModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3307,
      username: 'root',
      password: 'a',
      database: 'grocery_booking',
      entities: [User, Grocery, OrderedGrocery, Order],
      synchronize: true,
    }), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
