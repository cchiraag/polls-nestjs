import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'options' })
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'option_id' })
  option_id: number;

  @Column()
  question: string;

  @Column()
  option1: string;

  @Column()
  option2: string;

  @Column()
  option3: string;

  @Column()
  option4: string;

  @Column({ name: 'poll_id' })
  id: number;

  // @ManyToOne(() => Poll, (poll: Poll) => poll.options, {onUpdate: 'CASCADE', onDelete: 'CASCADE'})
  // @JoinColumn({name: 'poll_id'})
  // poll: Poll
}
