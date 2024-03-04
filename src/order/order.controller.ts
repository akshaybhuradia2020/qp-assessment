import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service'
import { AuthGuard } from 'src/auth/auth.guard';
import { Order } from './order.entity';
// import { Role } from 'src/role.enum';
// import { Roles } from 'src/roles.decorator';
// import { RolesGuard } from 'src/roles.guard';



@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService){}

    @UseGuards(AuthGuard)
    @Post('create_order')
    async createOrder(@Body() dto: Order){
      return await this.orderService.create(dto);
    };

    @UseGuards(AuthGuard)
    @Get('get_all_order/:userid')
    async getAllOrder(@Param('userid') userid: string){
      return await this.orderService.get(userid);
    };

    @UseGuards(AuthGuard)
    @Post('update_order/:orderid')
    async updateOrder(@Param('orderid') orderid: string, @Body() _data: any){
      return await this.orderService.update(orderid, _data);
    };
}




