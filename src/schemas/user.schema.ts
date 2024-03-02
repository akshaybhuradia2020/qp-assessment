import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>;


@Schema()
export class User{
    @Prop({required: true})
    username : string;

    @Prop({required: true})
    passwd: string;

    @Prop({required: true})
    email_id: string;

    @Prop({required: true})
    phone_no: string;

    @Prop({required: true})
    address: string;
    
    @Prop({required: true})
    is_admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);