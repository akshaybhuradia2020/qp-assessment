import { Module } from '@nestjs/common';
import { UserOpController } from '../user_op/user_op.controller';
import { UserOpService } from '../user_op/user_op.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user_op.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserOpController],
  providers: [UserOpService],
  exports: [UserOpService]
})
export class UserOpModule {}
