import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Option } from "./option.entity";

@Entity({name: 'polls'})
export class Poll extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'poll_id'})
    id: number;

    @Column()
    description: string;

    @Column()
    status: string;

    // @OneToMany(() => Option, (option: Option) => option.poll)
    // options: Option

}

export { Option };
