import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grocery{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name : string;

    @Column()
    price: number;

    @Column()
    quantity: number;

};
