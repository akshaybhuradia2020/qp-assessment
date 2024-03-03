import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { UserOpService } from './user_op.service';
import {AuthGuard} from '../auth/auth.guard';
import { User } from './user_op.entity';
import { Role } from 'src/rbac/role.enum';
import { Roles } from 'src/rbac/roles.decorator';
import { RolesGuard } from 'src/rbac/roles.guard';

@Controller('user-op')
export class UserOpController {
    constructor(private readonly userService: UserOpService){}
    
    @Post('signup')
    async createUser(@Body() dto: User){
        return await this.userService.create(dto);
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Get('get_user_by_id/:id')
    async getUserById(@Param('id') id: string){
        return await this.userService.getuserbyid(id);
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Get('get_all_user')
    async getUserAll(){
        return await this.userService.getalluser();
    }

    // @Get('check_user_exist')
    // async checkUserExist(@Query() query: {username: string, passwd: string}){
    //     return await this.userService.checkuserexist(query)
    // }
}
