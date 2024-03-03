import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/rbac/role.enum';
import { Roles } from 'src/rbac/roles.decorator';
import { RolesGuard } from 'src/rbac/roles.guard';
import { Grocery } from './grocery.entity';

@Controller('grocery')
export class GroceryController {

    constructor(private readonly groceryService: GroceryService) {}

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Post('create_gros')
    async createGrocery(@Body() _data: Grocery){
      return await this.groceryService.create(_data);
    }
  
    @Get("get_all_gros")
    async getAllGros(){
      return await this.groceryService.getall();
    }

    @Get("get_specific_gros/:id")
    async getSpecifiGros(@Param('id') id: string){
      return await this.groceryService.getone(id);
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Post('update_gros/:id')
    async updateGrocery(@Param('id') id: string, @Body() _data: any){
      return await this.groceryService.update(id, _data);
    }

    // @Roles(Role.Admin)
    @Delete("delete_grocery/:id")
    async deleteGrocery(@Param('id') id: string){
      return await this.groceryService.delete(id);
    }
}


