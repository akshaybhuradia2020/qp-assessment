import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Order{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    order_pickup : string;

    @Column()
    order_destination: string;

    @Column()
    order_shipper: string;

    @Column()
    order_delivered_to_customer: boolean;

    @Column()
    user_id: string;
    
    @OneToMany(() => OrderedGrocery,  grocery => grocery.order_id,{
        cascade:true,
        eager: true
    })
    groceries: OrderedGrocery[];

    @Column()
    order_date: Date;

    @Column({nullable: true})
    order_delivered_date: Date;

    @Column()
    order_contact: string;
    
}

@Entity()
export class OrderedGrocery{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    grocery_id: string

    @Column()
    ordered_quantity: number

    @Column()
    ordered_price: number
    
    @ManyToOne(() => Order, (order) => order.groceries, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    order_id: Order;
}


