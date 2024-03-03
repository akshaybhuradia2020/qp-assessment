import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroceryService } from 'src/grocery/grocery.service';
import { Order } from './order.entity';




@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private OrderModel: Repository<Order>, 
        private groceryservice: GroceryService){}

    async create(createOrder: Order): Promise<Order> {
        let _flag = false;
        try{
            for(const _item in createOrder.groceries){
                const _get_grocery = await this.groceryservice.getone(createOrder.groceries[_item]["grocery_id"]);
                console.log(_get_grocery, createOrder.groceries[_item]);
                if(_get_grocery.quantity >= createOrder.groceries[_item]["ordered_quantity"]){
                    const _update_grocery_count = await this.groceryservice.update(createOrder.groceries[_item]["grocery_id"],
                    {quantity: (_get_grocery.quantity -createOrder.groceries[_item]['ordered_quantity'])});
                }
            }
        }
        catch(err){
            console.log(err);
            _flag = true;
        }


        if (!_flag) {
            return await this.OrderModel.save(createOrder);
        }
        return ;
    }

    async get(id: string): Promise<Order[]> {
        return await this.OrderModel.findBy({user_id: id});
    }

    // async update(id: string, _data:any): Promise<Order> {
    //     if("grocery_quantity" in _data){
    //         ;
    //     }
    //     return await this.OrderModel.findByIdAndUpdate(id, _data);
    // }

}
