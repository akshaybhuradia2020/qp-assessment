import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GroceryModule } from './grocery/grocery.module';
import { UserOpModule } from './user_op/user_op.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [GroceryModule, UserOpModule, AuthModule ,MongooseModule.forRoot('mongodb://127.0.0.1:27017/grocery_booking'), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
