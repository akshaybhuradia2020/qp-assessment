import { Module } from '@nestjs/common';
import { UserOpController } from '../user_op/user_op.controller';
import { UserOpService } from '../user_op/user_op.service';
import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema} from '../schemas/user.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: User.name,schema: UserSchema}])],
  controllers: [UserOpController],
  providers: [UserOpService],
  exports: [UserOpService]
})
export class UserOpModule {}
