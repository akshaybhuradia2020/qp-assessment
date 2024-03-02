import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserOpService } from 'src/user_op/user_op.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserOpService, private jwtService: JwtService) {}

  async signIn(_data:any): Promise<any> {
    const _user = await this.usersService.checkuserexist(_data);
    
    if (_user["user_id"] == null) {
      throw new UnauthorizedException();
    }
    const payload = {sub: _user["user_id"].toString(), isadmin: _user["is_admin"]};
    
    return {
      access_token: await this.jwtService.signAsync(payload),
      is_admin: _user["is_admin"],
      user_id: _user["user_id"].toString()
    };

  }
}