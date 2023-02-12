import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

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
