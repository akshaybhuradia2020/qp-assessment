import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { UserOpService } from './user_op.service';
import { CreateUserDto } from './user_op.validation';
import {AuthGuard} from '../auth/auth.guard';

@Controller('user-op')
export class UserOpController {
    constructor(private readonly userService: UserOpService){}
    
    @Post('signup')
    async createUser(@Body() dto: CreateUserDto){
        return await this.userService.create(dto);
    }

    @UseGuards(AuthGuard)
    @Get('get_user_by_id/:id')
    async getUserById(@Param('id') id: string){
        return await this.userService.getuserbyid(id);
    }

    @UseGuards(AuthGuard)
    @Get('get_all_user')
    async getUserAll(){
        return await this.userService.getalluser();
    }

    // @Get('check_user_exist')
    // async checkUserExist(@Query() query: {username: string, passwd: string}){
    //     return await this.userService.checkuserexist(query)
    // }
}
