import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type GroceryDocument = HydratedDocument<Grocery>;


@Schema()
export class Grocery{
    @Prop({required: true})
    name : string;

    @Prop({required: true})
    price: number;

    @Prop({required: true})
    quantity: number;

}

export const GrocerySchema = SchemaFactory.createForClass(Grocery);