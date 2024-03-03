import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsDate, IsNumber, IsString, MaxLength} from 'class-validator';
import { ordered_grocery_model } from './ordered_grocery_model';


export class CreateOrderDto{
    @ApiProperty()
    @IsString()
    @MaxLength(100)
    order_pickup: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    order_destination: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    order_shipper: string;

    @ApiProperty()
    @IsBoolean()
    order_delivered_to_customer: boolean;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    user_id: string;

    @ApiProperty()
    @IsDate()
    @MaxLength(100)
    order_date: Date;

    @ApiProperty()
    @IsDate()
    @MaxLength(100)
    order_delivered_date: Date;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    order_contact: string;

    @ApiProperty()
    grocery_selected: ordered_grocery_model;
}