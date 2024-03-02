import { Controller, Query,Get,Post, UseGuards } from '@nestjs/common';
import  {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authservice: AuthService) {}

    @Get('signin')
    async login(@Query() query: {username: string, passwd: string}): Promise<any>{
        return await this.authservice.signIn(query);
    }

}
