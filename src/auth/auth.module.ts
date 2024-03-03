import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import {UserOpModule} from '../user_op/user_op.module';

@Module({
  imports: [UserOpModule, 
    JwtModule.register({
      global: true,
      secret: "wsdf",
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}