import {ApiProperty} from '@nestjs/swagger';
import {IsString, MaxLength} from 'class-validator';

export class CreateUserDto{
    @ApiProperty()
    @IsString()
    @MaxLength(100)
    username: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    passwd: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    address: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    email_id: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    phone_no: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    is_admin: string;
}