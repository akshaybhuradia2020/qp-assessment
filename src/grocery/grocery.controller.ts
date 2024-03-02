import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import {CreateGroceryDto} from './grocery.validation';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/role.enum';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/roles.guard';

@Controller('grocery')
export class GroceryController {

    constructor(private readonly groceryService: GroceryService) {}

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Post('create_gros')
    async createGrocery(@Body() dto: CreateGroceryDto){
      return await this.groceryService.create(dto);
    }
  
    @UseGuards(AuthGuard)
    @Get("get_all_gros")
    async getAllGros(){
      return await this.groceryService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get("get_specific_gros/:id")
    async getSpecifiGros(@Param('id') id: string){
      return await this.groceryService.findOne(id);
    }

    @UseGuards(AuthGuard)
    @Post('update_gros/:id')
    async updateGrocery(@Param('id') id: string, @Body() dto: CreateGroceryDto){
      return await this.groceryService.update(id, dto);
    }

    @UseGuards(AuthGuard)
    @Delete("delete_grocery/:id")
    async deleteGrocery(@Param('id') id: string){
      return await this.groceryService.delete(id);
    }
}


