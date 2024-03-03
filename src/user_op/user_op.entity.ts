import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username : string;

    @Column()
    passwd: string;

    @Column()
    email_id: string;

    @Column()
    phone_no: string;

    @Column()
    address: string;
    
    @Column()
    is_admin: boolean;
};