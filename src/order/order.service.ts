import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../schemas/order.schema';
import { CreateOrderDto } from './order.validation';
import { GroceryService } from 'src/grocery/grocery.service';



@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private OrderModel: Model<Order>, 
        private groceryservice: GroceryService){}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        let _flag = false;
        try{
            for(const _item in createOrderDto.grocery_selected){
                const _get_grocery = await this.groceryservice.getone(createOrderDto.grocery_selected[_item]["groceryid"]);
                if(_get_grocery["quantity"] >= createOrderDto.grocery_selected[_item]["grocery_quantity"]){
                    const _update_grocery_count = await this.groceryservice.update(createOrderDto.grocery_selected[_item]["groceryid"],
                    {quantity: (_get_grocery["quantity"] -createOrderDto.grocery_selected[_item]['grocery_quantity'])});
                }
            }
        }
        catch(err){
            console.log(err);
            _flag = true;
        }


        if (!_flag) {
            const createdOrder = new this.OrderModel(createOrderDto);
            return createdOrder.save()
        }
        return ;
    }

    async get(id: string): Promise<Order[]> {
        return await this.OrderModel.find({user_id: id});
    }

    async update(id: string, _data:any): Promise<Order> {
        if("grocery_quantity" in _data){
            ;
        }
        return await this.OrderModel.findByIdAndUpdate(id, _data);
    }

}
