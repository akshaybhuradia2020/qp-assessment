import {ApiProperty} from '@nestjs/swagger';
import {IsNumber, IsString, MaxLength} from 'class-validator';

export class CreateGroceryDto{
    @ApiProperty()
    @IsString()
    @MaxLength(100)
    name: string;

    @ApiProperty()
    @IsNumber()
    @MaxLength(100)
    price: number;

    @ApiProperty()
    @IsNumber()
    @MaxLength(100)
    quantity: number;
}