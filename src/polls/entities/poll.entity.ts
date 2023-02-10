import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Option } from "./option.entity";

@Entity({name: 'polls'})
export class Poll extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'poll_id'})
    id: number;

    @Column({name: 'description'})
    description: string;

    @Column({name: 'status'})
    status: string;

    // @OneToMany(() => Option, (option: Option) => option.poll)
    // options: Option

}