import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
import { ordered_grocery_model } from 'src/order/ordered_grocery_model'; 

export type OrderDocument = HydratedDocument<Order>;


@Schema()
export class Order{
    @Prop({required: true})
    order_pickup : string;

    @Prop({required: true})
    order_destination: string;

    @Prop({required: true})
    order_shipper: string;

    @Prop({required: true})
    order_delivered_to_customer: boolean;

    @Prop({required: true})
    user_id: string;
    
    @Prop({required: true})
    grocery_selected: ordered_grocery_model[];

    // @Prop({required: true})
    // order_quantity: boolean;

    @Prop({required: true})
    order_date: Date;

    @Prop({required: false})
    order_delivered_date: Date;

    @Prop({required: true})
    order_contact: string;
    
}

export const OrderSchema = SchemaFactory.createForClass(Order);