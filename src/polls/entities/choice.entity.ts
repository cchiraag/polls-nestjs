import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'choices' })
export class Choice extends BaseEntity {
  @Column({ name: 'poll_id' })
  id: number;

  @Column()
  option_choice: number;

  @PrimaryColumn()
  user_id: string;
}
