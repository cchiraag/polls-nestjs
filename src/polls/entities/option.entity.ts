import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";
import { Poll } from "./poll.entity";

@Entity({name: 'options'})
export class Option extends BaseEntity {

    @PrimaryColumn({name: 'poll_id'})
    id: number;
    
    @Column()
    option1: string;
    
    @Column()
    option2: string;

    @Column()
    option3: string;

    @Column()
    option4: string;
    
    // @ManyToOne(() => Poll, (poll: Poll) => poll.options, {onUpdate: 'CASCADE', onDelete: 'CASCADE'})
    // @JoinColumn({name: 'poll_id'})
    // poll: Poll
}